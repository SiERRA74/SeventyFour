document.addEventListener("DOMContentLoaded", function() {
    const nightsky = document.getElementById("nightsky");
    const ctx = nightsky.getContext("2d");

    const imageSources = ["assets/asteroid.png"];
    const asteroidSize = 32;

    const asteroid = new Image();
    asteroid.onload = function() {
        let x = nightsky.width;                         // Initial x position
        let y = (nightsky.height - asteroidSize) / 2;   // Initial y position
        let rotation = 0;                               // Initial rotation angle

        const fps = 30;                                 // Desired frames per second
        const interval = 1000 / fps;                    // Interval between frames in milliseconds
        
        let then = performance.now();                  // Timestamp of the previous frame
        
        function animate(now) {

            requestAnimationFrame(animate);

            const delta = now - then;
            if (delta >= interval) {

                ctx.clearRect(0, 0, nightsky.width, nightsky.height);

                x -= 1;                                     // Move the asteroid to the left (eahc frame)
                rotation += 0.01;                           //Update the rotation angle
                
                ctx.save();

                rotateAsteroid();
            }

        }



        function rotateAsteroid() {
            ctx.translate(x + asteroidSize / 2, y + asteroidSize / 2);
            ctx.rotate(rotation);

            ctx.drawImage(asteroid, -asteroidSize / 2, -asteroidSize / 2, asteroidSize, asteroidSize);  // Draw the asteroid at the updated position and rotation
            ctx.restore();
        }



        animate();
    };

    asteroid.src = imageSources[Math.floor(Math.random() * imageSources.length)];
});
