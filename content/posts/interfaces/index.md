---
title: "Proposal for a navigation panel for complex (or perhaps bloated) admin interfaces"
date: 2023-10-04T20:42:44+05:30
css: "css/interfaces.css"
hero: "/static/interfaces/hero.svg"
---
Based on usage complexity, software applications could be broadly classified in to three categories:

### "I got this!":

The applications that fall under this category are ubiquitous and, as such, their interfaces have become part of the *collective conscious*, so to speak. Most users can pretty much guess as to what will follow after a particular action.

Examples include ecommerce stores, booking websites, mail clients, chat applications, basic text editors. It's not uncommon to find competing applications in this category have similar actions in the exact location as the other one.

### "I can always play and figure it out.":

This category includes the tiniest of applications like a QR code scanner that does one thing, all the way up to design tools like Figma, Photoshop and productivity tools like Slack, Notion [[1]](#1).

The comprehensive tools mentioned above could also be described as <strong>*journey tools*</strong> allowing the user to embark on a journey from a lowly begineer to an expert. Granted, you may face hurdles and seek documentation, tutorials, courses or guidance from your coworkers but it's all part of the journey as you play, make mistakes, undo those mistakes, learn and play all over again. rinse and repeat. circle of life.

### "Not meant for play."

I don't think *play* is part of the lexicon for these applications. It's just *admin stuff*. The applications on this category typically include dashboard applications that integrate a multitude of features, each application on their own right, in to one. Their interfaces are oriented towards business verticals or information management &mdash; aka *something critical*. 

Relatable examples include Shopify, Income Tax portal [[2]](#2), etc. Besides those, any application targeting a business vertical (banking, healthcare, etc.),  primarily used by employees of those businesses, will also end up in this category. 

Firstly, what sets them apart from the above two categories is that they have documentation, tutorials, courses not only for guiding users but also as a prerequisite. In the absence of such prerequisite, a certain know-how is always expected from the end user.

<figure style="aspect-ratio:3.78">
  <picture>
    <source srcset="images/shopify_ztma57_c_scale,w_907.png" media="(min-width: 720px)">
    <img src="images/shopify_ztma57_c_scale,w_626.png" alt="The Right way from Shopify">
  </picture>
  <figcaption>"The Right Way" from Shopify</figcaption>
</figure>

For instance, the video tutorials like the one above from the official Shopify channel are immensely popular and have an incredible side effect of humanizing the brand to it's wide audience  &mdash; not to forget, youtube has become a tutorial wonderland for everything under the sun &mdash; however, if a product has tutorial for it's users on getting started *the right way*, you know it can get quite overwhelming for beginner users.

Secondly, it bears mentioning that applications in this category cannot be used or described as *journey tools* [[3]](#3). Not only for the reasons listed above but also because the journey could abruptly land its target audience on too unknown of a terrain. For instance, in case of Shopify, you will inevitably find yourself in need of customization. There are levels to customization and guidance, however, if a regular store owner &mdash; who has no business learning web technology jargon &mdash; is expected to know that missing an `alt` text might impact their *SEO* or understand HTML/CSS for a minute change like changing the background color of a button as seen <a href="https://community.shopify.com/c/shopify-discussions/button-change-color-when-product-is-soldout/td-p/2013766" target="blank">in this question</a>, it can quickly become cumbersome.

The next section explores *one* of many possible solutions to the problems mentioned.

## Proposal

**Preface**: I am not a Shopify customer or developer. Although the idea for this article did stem from my brief yet poignant experience of using it to setup a test store. Shopify is a successful business with a thriving ecosystem for a reason and their product is merely used as a convenient reference for admin dashboards. I cometh in peace.

Now, let's talk about a possible solution, keeping in mind the existing interface and ecosystem cannot be revamped lest the business alienates its existing users. 

📝 *The screencasts below are not videos but animated on canvas. Recorded and generated through a little tool I built called <a target="_blank" href="/recording-and-generating-animated-screencasts-within-the-browser">Betamax</a>. Check it out! ✨*

Below are the characteristics of the navigation panel: 

<div class="br"></div>

### Unobtrusive

{{< btm_canvas id="demo1" aspectratio="1.84" width="720" height="402" ldHeight="348" index="0" >}}

<div class="br"></div>

Tucked away at the bottom right of the screen, it will not take up much of the existing real estate unless the user needs it.

<div class="br"></div>

### Simulate a journey

{{< btm_canvas id="demo2" aspectratio="1.25" width="402" height="514" slider="true" captions="slides_1" index="1" >}}

<div class="br"></div>

To put it simply, *"show me where am at and where I need to go"* and while I am here, *"show me what I can do here"*.

Find out the users requirement and map out all possible scenarios, providing a step-by-step guide. This could also be heavily influenced by usage data and case studies of existing users. 

If you noticed the play <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg> button in the demo, it's usage is explained later.

<div class="br"></div>

### Context-rich

{{< btm_canvas id="demo3" aspectratio="1.25" width="402" height="514" index="2" >}}

<div class="br"></div>

List of actions update based on the current page — keeping the panel relevant to the user. The actions could also be ordered based on the location the user is currently hovering over in the page.

<div class="br"></div>

### There's always Undo

{{< btm_canvas id="demo4" aspectratio="1.25" width="402" height="514" index="3" >}}

<div class="br"></div>

Besides showing history of actions, it would be great if the past actions could be undo'd. This requires backend changes but the list of undo-able actions could possibly be limited to last 10 changes. 

Out in the real world, when you are travelling and get lost somewhere, it's reassuring to know that you can always go back to a familiar place and start all over again. Similarily, the user could always go back to a previous state and start over. 

<div class="br"></div>

### Humanize it

{{< btm_canvas id="demo6" aspectratio="1.25" width="402" height="514" index="5" >}}

<div class="br"></div>

With AI chatbots at large, it has never been easier to create a humanized guide. It could also assist users on trivial tasks that may appear non-trivial — like the one posted on the forum link above [[4]](#4). An example of an assistant from Shopify can be seen <a target="_blank" href="https://www.shopify.com/in/magic">here</a>.
 
Now, should an AI assistant automate away all the UI actions for the user? It will, if it can. I do see it being particularily useful in scenarios where the user would rather type through a problem than deal with some complex UI soup.
So, will the user interface ultimately end up being a presentation layer with all the WRITE actions typed by the user instead of clicking through buttons? I don't think so. In order to use any AI chatbot effectively, the user has to be able to first frame the question appropriately, inevitably requiring them to have some experience with the product interface. In other words, the user interface will always remain central to the product usage.

<div class="br"></div>

{{< btm_canvas id="demo5" aspectratio="1.25" width="402" height="514" index="4" >}}

<div class="br"></div>

Are there other potential ways to humanize such applications besides video tutorials on youtube? I do like the idea of an oversized cursor pointing at things I am supposed to click to get the job done, notwithstanding the disconcerting visual of someone hand/cursor-holding the user.


## Conclusion

So, is this approach suitable for all kinds of admin interfaces? No. It's heavily dependent on your target audience and whether the application has characteristics similar to ones on the last category above. 

Is this navigation panel mobile-friendly? it could be. However, the desktop usage of these admin tools usually outnumber the mobile ones, so, I wouldn't consider it for mobile apps before testing out it's efficacy on the desktop. [[4]](#4)

Is this a fixer-upper kind of solution? yes. In an ideal world, applications should be able to incorporate the appropriate learning curve for it's end users. 

And do I want to see this implemented in Shopify or other admin apps? No. I love thinking about products and user interfaces. So for me, this was just a fun thought experiment. Is this is a substitute for youtube tutorials? of course not. When done right (as Shopify does), nothing can substitute those friendly faces. 

**To summarise**: A navigation panel will help users navigate the interface, just like a GPS would, without limiting agency.

### Notes:  

<a name="1">[1]</a>: Now, the productivity tools mentioned might seem to be on a *road to bloatware* but as long as they are appreciated for what they do best with everything else neatly tucked away under some menu or */slash*, they should be a-ok.

<a name="2">[2]</a>: You could checkout the screenshots of the portal we use <a href="https://www.incometax.gov.in/iec/foportal/help/how-to-file-itr1-form-sahaj" target="_blank">here</a>.

<a name="3">[3]</a>: You could argue that Shopify having an onboarding wizard does in fact make it a *journey tool*, atleast for  beginners. I beg to differ. The wizard is displayed as a completion marker, only pointing me to their documentation at each step, whereas the video tutorial mentioned above was much more helpful compared to the wizard. 

<a name="4">[4]</a>: For non-trivial or custom tasks, the customer can always opt for Shopify experts.

<a name="5">[4]</a>: A cursory glance at the sheer number of tutorials for the shopify web application compared to the mobile app confirmed that for me.

{{< btm_script >}}