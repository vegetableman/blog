---
title: "Setting up a NixOS vm on macOS through QEMU, Packer and Vagrant"
date: 2025-04-09T16:56:17+05:30
css: "css/packer.css"
---

Repository: 
https://github.com/vegetableman/nixos24.11-packer

There are two steps I had to follow to make sure I could set this vm up on my machine (MacOS using M3):
- [Booting NixOS manually through QEMU](#booting-nixos-manually-through-qemu)
- [Fixing SSH handshaking issues popping up during the build process](#fixing-ssh-handshaking-issues-popping-up-during-the-build-process)


## Booting NixOS manually through QEMU


```bash {linenos=true}
vegetableman@mac:~$ /opt/homebrew/bin/qemu-system-aarch64 \  
     -name nixos-arm64 \
     -M virt,highmem=on \
     -accel hvf \
     -cpu host \
     -m 2048 \
     -smp 4 \
     -drive file=output-nixos-qemu/nixos-arm64.qcow2,if=virtio,cache=writeback,discard=ignore,format=qcow2 \
     -drive file="./nixos-minimal-24.11.1-aarch64-linux.iso",media=cdrom,if=none,id=cdrom \
     -device virtio-scsi-device \
     -device scsi-cd,drive=cdrom \
     -device virtio-net-device,netdev=user.0 \
     -netdev user,id=user.0,hostfwd=tcp::4414-:22 \
     -bios /opt/homebrew/share/qemu/edk2-aarch64-code.fd \
     -nographic
```

Booting this iso manually through QEMU helped me understand the required configuration parameters to run it optimally and most importantly, it helped me verify whether my machine could run NixOS on QEMU. Above is the configuration that worked out well on my system.


## Fixing SSH handshaking issues popping up during the build process

This was the most frustating of issues that I had to face to get packer working. It's not difficult to find these issues reported on the [packer repo](https://github.com/search?q=repo%3Ahashicorp%2Fpacker+ssh+timeout&type=issues).

To cut to the chase, the most parameter to tweak is <span class="hl-code">`boot_wait`</span>.  I went with `30s`. However, I have seen it being set to a much higher value, like, `120s` on some repo's. This is the time packer waits BEFORE sending any boot commands. The time should be reasonable enough for the guest vm to boot completely including finish setting up the <span class="hl-code">`sshd`</span> daemon, without which packer goes on an endless loop of failed connection attempts. I have seen way too many of those failures, but I live to tell the tale.

Other parameters that might help you from getting stuck are: <span class="hl-code">`ssh_handshake_attempts`</span>, <span class="hl-code">`ssh_wait_timeout`</span>, <span class="hl-code">`ssh_timeout`</span>. Details on them are documented on the repo above.

The boot commands (<span class="hl-code">`boot_command`</span>) are the second most important detail where we send commands to save the public key on the guest vm, that both packer and vagrant need to establish SSH connections to the vm, for provisioning and logging in respectively. More details on it are documented [here](https://developer.hashicorp.com/vagrant/docs/boxes/base). 

In fact, Hashicorp provides its own set of public and private keys called insecured keypairs (available on this [repo](https://github.com/hashicorp/vagrant/tree/main/keys)) that could be placed on a directory. While the private key is set through <span class="hl-code">`ssh_private_key_file`</span>, the public key is sent to the guest vm using the <span class="hl-code">`http_directory`</span> parameter.

This process of building my vagrant box also led me to publish it to the [vagrant cloud](https://portal.cloud.hashicorp.com/vagrant/discover/vegetableman/nixos-24.11-aarch64).

Until next time.

