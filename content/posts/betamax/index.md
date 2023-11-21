---
title: "Recording and generating animated screencasts within the browser"
date: 2023-10-05T00:42:44+05:30
hero: "/static/betamax/hero.svg"
css: "css/betamax.css"
---

<div class="br"></div>
 
<p align="left" class="quote">
<i>"Nostalgia - its delicate, but potent." </i>
  <br/>
  <span class="ptg">- <small>Don Draper</small></span>
</p>

<div class="br"></div>
<div class="br"></div>
<div class="br"></div>

{{< btm_animate >}}

Reflecting on my quest for the past couple of months, I wonder if I should attribute it to a sentimental truism on *nostalgia* by the protagonist of a <a target="blank" href="https://en.wikipedia.org/wiki/Mad_Men">TV series</a> or is it just the profound need to build something? Regardless, here we are!

<figure>
  <canvas id="btm_sublime" width="800" height="446" x-data :x-init="
   const timeline = [{'delay':689,'blit':[[0,0,800,446,0,0]]},{'delay':344,'blit':[[718,500,9,10,147,12],[432,36,115,18,411,36],[450,516,37,12,740,92],[286,98,225,15,265,98],[504,514,47,18,731,124],[223,278,29,15,202,278],[349,323,203,15,328,323],[223,278,29,15,258,383],[789,498,9,12,101,431]]},{'delay':204,'blit':[[631,517,25,17,390,37],[718,510,9,3,181,51],[728,494,9,3,496,51],[693,518,25,12,737,92],[351,516,25,18,243,96],[190,514,23,18,728,124],[60,528,22,12,737,192],[284,514,17,30,728,230],[326,516,25,18,180,276],[656,518,37,10,722,312],[326,516,25,18,306,321],[301,516,25,18,236,381],[504,500,114,14,3,430]]},{'delay':78,'blit':[[618,500,52,17,0,96],[148,516,25,18,243,96],[792,472,6,4,737,100],[190,499,114,15,3,430]]},{'delay':197,'blit':[[792,468,6,4,728,124],[728,498,52,17,0,276],[123,516,25,18,180,276],[504,501,9,12,3,431]]},{'delay':79,'blit':[[792,464,6,4,745,130],[740,481,52,17,0,321],[123,516,25,18,306,321],[780,498,9,12,3,431]]},{'delay':664,'blit':[[792,476,6,3,736,139],[740,464,52,17,0,381],[98,516,25,18,236,381],[728,482,9,12,3,431]]},{'delay':129,'blit':[[147,12,9,10,147,12],[614,482,114,18,390,36],[413,516,37,12,737,92],[459,446,226,18,243,96],[237,514,47,18,728,124],[30,516,30,18,180,276],[415,464,204,18,306,321],[0,516,30,18,236,381]]},{'delay':85,'blit':[[685,446,114,18,390,36],[376,516,37,12,737,92],[233,446,226,18,243,96],[190,514,47,18,728,124],[211,464,30,18,180,276],[211,464,204,18,306,321],[755,515,30,18,236,381]]},{'delay':151,'blit':[[619,464,121,18,390,36],[60,516,38,12,737,92],[0,446,233,18,243,96],[670,500,48,18,728,124],[0,464,37,18,180,276],[0,464,211,18,306,321],[718,515,37,18,236,381]]},{'delay':100,'blit':[[404,499,100,17,418,36],[595,517,36,12,740,92],[212,482,212,17,271,96],[551,514,44,18,733,124],[0,499,16,17,208,276],[0,499,190,17,334,321],[0,499,16,17,264,381]]},{'delay':1002,'blit':[[304,499,100,17,425,36],[741,92,36,12,741,92],[0,482,212,17,278,96],[733,124,45,18,733,124],[424,482,16,17,215,276],[424,482,190,17,341,321],[424,482,16,17,271,381]]},{'delay':100,'blit':[[181,51,9,3,181,51],[181,51,9,3,517,51],[0,96,52,17,0,96],[285,96,3,17,285,96],[737,192,22,12,737,192],[728,230,17,30,728,230],[0,276,52,17,0,276],[222,276,3,17,222,276],[722,312,37,10,722,312],[0,321,52,17,0,321],[222,276,3,17,348,321],[0,381,52,17,0,381],[222,276,3,17,278,381],[3,430,107,15,3,430]]}];
  setAnimation('demos/sublime/packed_image.png', timeline, 'btm_sublime');"></canvas>
 <figcaption>Demo from the original post</figcaption>
 <small class="figcaption--small">(Recorded and generated here through Betamax)</small>
</figure>

<div class="br"></div>


More than a decade ago, a blog post titled  <a href="https://www.sublimetext.com/~jps/animated_gifs_the_hard_way.html" target="blank">"Animated GIFs the Hard Way"</a>[[1]](#1) was released by Jon Skinner, the creator of Sublime Text. The post showcased a fascinating demo of the text editor (displayed above), brought to life through javascript, canvas and an image packing differences between the frames of a recording. However, I came across it only a couple of years back, after which it drifted in and out of my consciousness, as and when I used to extol it's ingenuity to some of my colleagues about it.

So, when I needed to display short screencasts for my recent <a target="_blank" href="/proposal-for-a-navigation-panel-for-complex-or-perhaps-bloated-admin-interfaces/">blog post</a>, I decided to build a companion tool to record and generate those demo's.

Below is a demonstration of the tool generating one of the required demo's. 

<div class="br"></div>

<figure align="center" style="aspect-ratio:1.60"> 
  <video class="lazy" autoplay playsinline muted controls width="720">
    <source data-src="betamax.webm" type="video/mp4"/>
  </video>
  <figcaption>Generating a demo</figcaption>
</figure>

<div class="br"></div>

The tool is called <a>*Betamax*</a>. I know, comical as it may sound but it's been named that for a reason as it's not a replacement for `<video>` but merely an alternative medium that sort of died off along with the post Jon wrote eons ago. A relic of the past not seen elsewhere but the home pages of <a href="https://www.sublimetext.com/">amazing</a> <a target="_blank" href="https://www.sublimemerge.com/">products</a> from the mentioned author. It does sound cool though!

Below is the output generated from the tool (stored in zip): 

<figure align="center" style="aspect-ratio:1.24">
  <div class="journey-demo">
  <canvas x-data id="btm_journey_1" width="402" height="514" :x-init="
    const ishighDPI = window.devicePixelRatio > 1.3;
    fetch(`demos/journey_1/${ishighDPI ? 'timeline@2x.json': 'timeline.json'}`).then(async (res) => {
      const tt = await res.json();
      setAnimation(`demos/journey_1/${ishighDPI ? 'packed_image@2x.png': 'packed_image.png'}`, tt, 'btm_journey_1', ishighDPI ? 0.4: 0.9);
    });
  "></canvas>
  </div>
  <figcaption>Sample demo</figcaption>
</figure>

<div class="br"></div>
<div class="br"></div>

{{< zoomer x="demos/journey_1/packed_image.png" 2x="demos/journey_1/packed_image@2x.png">}}

<div class="br"></div>
<div class="br"></div>

<figure>
<pre class="timeline">[{"delay":400,"blit":[[0,0,402,514,0,0]]},{"delay":50,"blit":[[339,1976,23,28,116,438]]},{"delay":50,"blit":[[384,1328,16,21,116,445],[384,1349,15,21,101,472]]},{"delay":50,"blit":[[362,1976,21,28,95,472]]},{"delay":50,"blit":[[362,1982,18,22,95,481]]},{"delay":50,"blit":[[362,1984,18,20,95,484]]},{"delay":400,"blit":[[362,1983,18,21,95,485]]},{"delay":50,"blit":[[0,1899,402,48,0,455],[384,1370,10,10,0,504],[394,1370,6,10,392,504]]},{"delay":50,"blit":[[0,1446,402,109,0,405]]},{"delay":50,"blit":[[0,873,402,228,0,286]]},{"delay":50,"blit":[[0,1101,402,227,0,124],[0,1328,384,118,9,360],[339,1947,43,29,356,485],[0,2172,120,24,0,488]]},{"delay":50,"blit":[[0,514,402,359,0,55],[0,1842,384,57,9,415],[312,2083,88,16,32,488],[384,1380,4,9,394,498],[395,1380,6,3,3,511]]},{"delay":50,"blit":[[0,1555,402,105,0,13],[28,625,340,109,28,124],[0,1947,339,55,28,235],[28,804,339,53,28,303],[0,1660,384,106,9,366],[312,2099,88,14,32,488],[377,1960,4,9,394,498],[388,1380,7,4,2,510]]},{"delay":50,"blit":[[0,1766,402,76,0,0],[28,1179,340,113,28,78],[29,709,338,45,29,195],[19,1352,339,48,28,260],[46,825,258,12,46,311],[0,2002,338,55,29,318],[46,838,258,19,46,324],[21,1696,14,28,30,390],[312,2057,78,26,52,394],[387,577,6,9,387,409],[356,1076,18,19,356,484],[312,2083,88,14,32,488]]},{"delay":50,"blit":[[0,2142,312,30,33,439]]},{"delay":50,"blit":[[0,2057,312,44,33,425]]},{"delay":4000,"blit":[[0,2101,312,41,33,423]]}]</pre>
  <figcaption>timeline.json</figcaption>
</figure>

The `packed_image.png` places the first frame of the recording at the top with all the other frames stored as differences in a compact manner whereas `timeline.json` contains information on all those differences along with delay to animate it accordingly on the canvas as seen in the sample demo above.

The user interface of the tool is inspired by <a target="blank" href="https://github.com/phw/peek">"Peek"</a>. As a Linux user, I find it's no-nonsense interface idiomatic and quite easy to use.

On it's internal workings, the tool uses `getDisplayMedia` to record the screen, cropping the required region, generating a zip with all the frames marked with time, before passing it off to the <a target="_blank" href="https://github.com/sublimehq/anim_encoder">python encoder</a> from yesteryear (loaded through <a href="https://pyodide.org/en/stable/">Pyodide</a>) to generate the packed image.

So, did I succeed in building this tool? Not entirely. I managed to generate the demos that I needed out of it  &mdash; but  &mdash; I failed in releasing the tool for wider consumption. Hence, the *BETA*. Let's talk about the challenges.

## Challenges

When I built it initially, I was quite pleased with it's performance on my linux machine. I got optimistic about it and ended up refining it's UI, handling edge cases and what not. What I didn't anticipate was the bitter pill that I had to swallow after running it on Mac. Why is that? well, it all has to do with pixel density or DPR (Device Pixel Ratio). 

I am running my Linux on a device with a screen that maps it's pixels 1-to-1 to device pixels (CSS pixels). In such a scenario, the recorder captures the required region  with no noticeable effects on the frame rate of the page being recorded and the generation of the packed image through pyodide runs with relative ease. However, recording the same demo on a high DPI/Retina display causes the size of the captured image increase by a factor based on the DPR and with this increase, we also start seeing noticeable effects on the page being recorded affecting it's frame rate &mdash; which is bad if you wish to capture smooth transitions. 

<figure align="center">
  <picture>
    <source srcset="/betamax/implementation.png" media="(max-width: 767px), (max-device-width: 767px), (max-resolution: 1dppx)"/>
    <source srcset="/betamax/implementation@2x.png" media="(min-resolution: 2dppx)">
    <img src="/betamax/implementation.png" width="324" height="377"/>
  </picture>
  <figcaption>Supported implementations</figcaption>
</figure>

Now, let's talk about two ways we can record snapshots of the screen or application window, once we get the stream from `getDisplayMedia`:

`ImageCapture`: This is the default implementation. It relies on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/grabFrame" target="_blank">`grabFrame`</a> method of this interface which runs on an interval set to selected frame rate during recording. This method is a costly operation to run in case of high DPI displays, as it takes a snapshot of the whole region and doesn't allow cropping. However, to alleviate memory issues, only the required cropped region from those frames are stored using <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/createImageBitmap">`createImageBitmap`</a> on each interval before passing it off to the encoder post-recording.

`MediaRecorder`: This is the second option. When selected, it uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a>. Most of the screen recording extensions out on the wild use this api. It natively buffers and encodes the captured data with a lossy video codec [[2]](@2). The resulting blob out of this data is then set as source of a video element which can be played or downloaded.  Although it does affect the frame rate of the web page during recording, but relatively less so, allowing for transitions to be captured. Now, with regards to Betamax, we want individual frames out of this video, not the video itself. So, I initiate a playback of this video and capture frames out of it at a set interval.
However, the resulting frames are not only larger in size (<a target="_blank" href="https://github.com/vegetableman/betamax/issues/3">better color reproduction</a> than `ImageCapture`) but also have identical frames that <a href="https://github.com/vegetableman/betamax/issues/2">differ greatly</a> in **pixel data** due to compression (applied through encoding) during recording. 

What is the mentioned **pixel data**? 

It simply refers to the individual color values that make up the visual content of an image. The data consists of information about the color and intensity of each pixel, typically expressed in terms of red, green, and blue (RGB) values. [[3]](#3) 

This data is important because the current implementation of the python encoder relies on the differences between pixel data of individual frames to generate the packed image. However, due to compression applied by video codecs during the recording, even visually identical frames will differ in this data and end up being marked as dissimilar and packed separately &mdash; increasing the size of the packed image and, failing at it pretty much. 

So now, without significantly altering the python encoder (possibly introduce <a target="_blank" href="https://scikit-image.org/docs/stable/auto_examples/transform/plot_ssim.html">ssim</a>), the second option of `MediaRecorder` is no longer a working one which leaves me with the first option of using `ImageCapture`. As mentioned before, it leads to janky frame rate on high DPI displays and I didn't want to let go of those smooth transitions in my demo's.


<div align="center">
  <video class="lazy" autoplay playsinline muted loop height="200" width="480">
    <source data-src="quicksilver.webm" type="video/mp4"/>
  </video>
</div>

So, what did I do?... Easy! I became Quicksilver and slowed down time.

<figure align="center" x-data="{}" style="aspect-ratio:1.60">
    <video class="lazy" playsinline muted width="100%" poster="bottle.png" controls x-on:ended="$el.autoplay = false; $el.load()">
      <source data-src="bottle.webm" type="video/mp4"/>
    </video>
  <figcaption>Slowed down transitions <a href="#4">[4]</a></figcaption>
</figure>

So, if you are on a high DPI/Retina display, the sample demo above was made possible after slowing down the UI before recording i.e., by increasing the delay of the transitioning elements in the UI (in one case, from `300ms` to `600ms`) and then by scaling down the delay property of all the differences in the timeline by a factor of `0.4`, thereby speeding up the animation [[5]](#5). 


## So, will Betamax ever replace &lt;video&gt;HS?

Of course! It's coming back with a vengence. World domination is in sight, once, this tool gets out of *BETA* and if Sony Corp doesn't sue me on trademark infringement :D

To state the obvious, `<video>` is definitely better! it doesn't require javascript to run, doesn't care for @2x assets, has fancy compression codecs and it's pretty much, "Record once, play anywhere!". 

The primary goal of this project is to able to record and generate short animated screencasts within the browser *reliably* (and *quickly*) not because it wants to replace good ole `<video>` but because it's cool!

Checkout the source code and open issues here: https://github.com/vegetableman/betamax

{{< lazy_loader >}}

Notes:

<a name="1">[1]</a>: I would highly recommend reading it.

<a name="2">[2]</a>: `MediaRecorder` does not support lossless encoding.

<a name="3">[3]</a>: Thanks ChatGPT for this definition!

<a name="4">[4]</a>: Unmute for a surprise!

<a name="5">[5]</a>: This was much more reliable than fiddling with frame rate.