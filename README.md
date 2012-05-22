Happy Box
=========
###An experiment with closures and DOM optimizations.

Concept
-------
Happy Box is a StumpleUpon clone with a twist. Instead of a single ‘Stumble’ button Happy Box displays a quickly changing assortment of colors. Each color is associated with a URL. When a user clicks a color they are immediately redirected to the associated URL. If a color has no URL the user is asked to add one so others who find the same color will be redirected. 

The main goal of Happy Box is to explore the performance characteristics of the DOM. To see how fast it can react and what optimizations can be made to make it more responsive.

The only restriction of this project is that it cannot use any libraries (like jQuery). Using 3rd party code would obscure what was actually being done. This obfuscation would be detrimental to the main goal.

Seeding Colors
--------------
Each color is represented as a RGB triplet so there are over *16 million* available colors. It's unlikely this site will ever have enough URL submissions to cover even a small fraction of that, so Happy Box needs a way to trim the color space.

The naive solution would be to request a list of RGB tuples from the backend that have URLs. This will work for a small amount of colors. However as the color list increases the amount of data required will become unmanageable.

Instead Happy Box uses a color seed list. A color seed list is a set of unique numbers from 0 to 255. Happy Box then generates RGB tuple permutation from the numbers in the seed list. For example if the seed list is [100, 200] then Happy Box knows the color space consists of (100,100,200), (200,100,200)...

A color in the color space represented by the seed list is not guaranteed to have an associated URL. What is guaranteed, however, is that no color outside that color space will have a URL. This way the backend can control the number of colors shown by Happy Box and also expand the space if needed.

Backend
-------
While the backend for Happy Box has not been finished, there have been plans to do so. The basic framework is done and powered by Node.js with Redis as its database.

Demo
----
Live demo at http://happybox.bluegouda.com
