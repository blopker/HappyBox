Happy Box
=========
###An experiment with closures and DOM optimizations.

Concept
-------
Happy Box is a StumpleUpon clone with a twist. Instead of a single ‘Stumble’ button Happy Box displays a quickly changing assortment of colors. Each color is associated with a URL. When a user clicks a color they are immediately redirected to the associated URL. If a color has no URL the user is asked to add one so others who find the same color will be redirected. 

The main goal of Happy Box is to explore the performance characteristics of the DOM. To see how fast it can react and what optimizations can be made to make it more responsive.

The only restriction of this project is that it can not use any libraries (like jQuery). Using 3rd party code would obscure what was actually being done. This obfuscation would be detrimental to the main goal.

Seeding Colors
--------------
Since each color is represented as a RGB triplet there are over *16 million* available colors. 

Backend
-------
While the backend for Happy Box has not been finished, there have been plans to do so. 

Demo
----
Live demo at http://happybox.bluegouda.com