
# Wayne Enterprises Testing

## Solved Bugs

| Bug | Solution |
| ---| ----|
|hero video was not playing in mobile| added playsinline tag to video|



## Automated Testing 

### W3C HTML validator 

used [W3C Nu HTML Checker](https://validator.w3.org/)

please refer to the w3c-html-tests folder in the the documentation folder to view detailed tests before and after changes

-> [index.html](documentation/w3c-html-test/index-html-test-post.pdf): Passed all tests

-> [about-us.html](documentation/w3c-html-test/about-us-html-test-post.pdf): Passed all tests

-> [subsidiaries.html](documentation/w3c-html-test/subsidiaries-html-test-post.pdf): Passed all test

-> [corporate-responsibility.html](documentation/w3c-html-test/corporate-responsibility-html-test-post.pdf): Passed all tests

-> [investor-relations.html](documentation/w3c-html-test/investor-relations-html-test-post.pdf): Passed all tests

-> [contact-us.html](documentation/w3c-html-test/contact-us-html-test-post.pdf): Passed all tests

-> [careers.html](documentation/w3c-html-test/careers-html-test-post.pdf): Passed all tests

-> [under-construction.html](documentation/w3c-html-test/under-construction-html-test-post.pdf): Passed all tests

## Perfomance Testing 

Used Google Lighouse testing

scores are defined by Google as follows

![Google Lighouse Score Breakdown](documentation/lighthouse-score-explained.png)
[source](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)

--> insert lighthouse tests here 

### Steps Taken to improve performance

-> converted problematic images to webp format

-> compressed hero videos

-> added poster tag to videos

-> modyfing import scripts and links in head tag to "reduce block-size rendering"
    - added <code>defer = ""</code> attribute to 3rd party scripts
    - added <code>rel="preload" as="style" onload="this.rel='stylesheet'"</code> attribute to 3rd party links (bootsrap)
    - this saw a lighthouse increase of 88 to 90 on my index.html page which is one of the heaviest pages
    - these results where comperable in other pages generally going from 95 to 98
|Before|After|
|:-:|:-:|
|<img width="360" alt="Test Before" src="documentation/lighthouse-test/improvement-showcase/lightouse-test-improvement-head-tags-before.png">|<img width="360" alt="Test After" src="documentation/lighthouse-test/improvement-showcase/lightouse-test-improvement-head-tags-after.png">|

-> Changing the h1 animation had extreme imporvements in index.html and about-us.html
    - was previously using an [animation](https://animista.net/play/text/tracking-out) that effected the <code>letter-spacing</code> of the text, this cuased the layout to go through various shifts and greatly icreased load time
    - changing this animation to a [simpler one](https://animista.net/play/text/focus-in) that only used <code>filter</code> fixed this issue imporving the laod speed from around 90 to 99 in index.html and up to 95 in about-us.html.
    - I could probably see the same results in about-us.html but the video file used in the hero section is significantly larger, but I am happy with the score of 95 in performance
    
|Before|After|
|:-:|:-:|
|<img width="360" alt="Test Before" src="documentation/lighthouse-test/improvement-showcase/lightouse-test-improvement-animation-before.png">|<img width="360" alt="Test After" src="documentation/lighthouse-test/improvement-showcase/lightouse-test-improvement-animation-after.png">|

-> Adding a smaller video file that only gets shown to mobile devices, had a big inprovement in perfomance on mobile test (no efffect on desktop tests)
|Before|After|
|:-:|:-:|
|<img width="360" alt="Test Before" src="documentation/lighthouse-test/improvement-showcase/lighthouse-test-improvement-smaller-video-before.png">|<img width="360" alt="Test After" src="documentation/lighthouse-test/improvement-showcase/lighthouse-test-improvement-smaller-video-after.png">|

-> added smaller images to pages where the image load was generating  a lighthouse warning, set images that don't appear immediatly to <code>loading="lazy"</code>
- saw minor improvements in mobile performace scores
|Before|After|
|:-:|:-:|
|<img width="360" alt="Test Before" src="documentation/lighthouse-test/improvement-showcase/lighthouse-test-improvement-responsive-images-before.png">|<img width="360" alt="Test After" src="documentation/lighthouse-test/improvement-showcase/lighthouse-test-improvement-responsive-images-after.png">|

## Accesibility Testing 

I used the web inspector [Audit Tool](https://developer.apple.com/videos/play/wwdc2019/514/#:~:text=Audits%20and%20audit%20results%20can,the%20nodes%20in%20the%20report.) to find accesibility issues on my website.

I also used [AC checker](https://websiteaccessibilitychecker.com/checker/index.php) to check for accesibility complience. 

In the audio I manged to get all scores up to 100%

and in the AC checker I managed to remove all errors except for one regarding the heading nesting in my footer. But this didnt effect the Accesibiblty Audit so I left it.

-> **Home Page Accesibililty Audit**

![Home Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-home-page.png)

-> **About Us Page Accesibililty Audit**

![About Us Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-about-us-page.png)

-> **Subsidiaries Page Accesibililty Audit**

![Subsidiaries Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-subsidiaries-page.png)

-> **Corporate Responsibility Page Accesibililty Audit**

![Corporate Responsibility Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-corporate-responsibility-page.png)

-> **Investor Relations Page Accesibililty Audit**

![Investor Relations Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-investor-relations-page.png)

-> **Contact Page Accesibililty Audit**

![Contact Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-contact-page.png)

-> **Careers Page Accesibililty Audit**

![Careers Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-careers-page.png)

-> **Under Construction Page Accesibililty Audit**

![Under Construction Page Accesibililty Audit](documentation/accesibility-tests/accesibility-audits/accesibility-audit-under-construction-page.png)


### Steps taken to improve Accesibility

- used <code>title</code> attribute on links
- used <code>span</code> instead of <code>i</code> for icons

these two saw improvements in Accesibillity results on both the Audit and the AC checker

|Before|After|
|:-:|:-:|
|<img width="360" alt=" AC Test Before" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-ac-before.png">|<img width="360" alt="AC Test After" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-ac-after.png">|
|<img width="360" alt=" Audit Test Before" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-audit-before.png">|<img width="360" alt="Audit Test After" src="documentation/accesibility-tests/improvement-showcase/accesibility-improvement-audit-after.png">|

### Steps taken to imporve SEO

-> added meta description tags to each page in the website
 - this increase the SEO score in lighthouse from 82 to 91

