window.onload = function() {

  MAX_SEQ = 80
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.canvas.width = window.innerWidth;
  context.canvas.height = (850 * window.innerWidth) / 1300;
  var width = canvas.width;
  var height = canvas.height;
  var imagedata = context.createImageData(width, height);

  function colorMapping() {
    var mapping = [];

    var color = {};
    color["red"] = 247;
    color["green"] = 252;
    color["blue"] = 253;
    mapping.push(color);

    var color = {};
    color["red"] = 233;
    color["green"] = 242;
    color["blue"] = 247;
    mapping.push(color);

    var color = {};
    color["red"] = 217;
    color["green"] = 231;
    color["blue"] = 241;
    mapping.push(color);

    var color = {};
    color["red"] = 197;
    color["green"] = 216;
    color["blue"] = 232;
    mapping.push(color);

    var color = {};
    color["red"] = 177;
    color["green"] = 201;
    color["blue"] = 225;
    mapping.push(color);

    var color = {};
    color["red"] = 158;
    color["green"] = 188;
    color["blue"] = 218;
    mapping.push(color);

    var color = {};
    color["red"] = 147;
    color["green"] = 165;
    color["blue"] = 206;
    mapping.push(color);

    var color = {};
    color["red"] = 146;
    color["green"] = 139;
    color["blue"] = 187;
    mapping.push(color);

    var color = {};
    color["red"] = 164;
    color["green"] = 109;
    color["blue"] = 157;
    mapping.push(color);

    var color = {};
    color["red"] = 165;
    color["green"] = 114;
    color["blue"] = 177;
    mapping.push(color);

    var color = {};
    color["red"] = 156;
    color["green"] = 138;
    color["blue"] = 222;
    mapping.push(color);

    var color = {};
    color["red"] = 200;
    color["green"] = 142;
    color["blue"] = 170;
    mapping.push(color);

    var color = {};
    color["red"] = 234;
    color["green"] = 153;
    color["blue"] = 137;
    mapping.push(color);

    var color = {};
    color["red"] = 249;
    color["green"] = 174;
    color["blue"] = 140;
    mapping.push(color);

    var color = {};
    color["red"] = 245;
    color["green"] = 190;
    color["blue"] = 162;
    mapping.push(color);

    var color = {};
    color["red"] = 232;
    color["green"] = 204;
    color["blue"] = 192;
    mapping.push(color);

    return mapping;
}

  function complex_abs(z) {
    var x = z[0];
    var y = z[1];
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  function complex_add(z, z_prime) {
    var z_add = [];
    z_add.push(z[0] + z_prime[0]);
    z_add.push(z[1] + z_prime[1]);
    return z_add;
  }

  function complex_square(z) {
    var x = z[0];
    var y = z[1];
    var z_sq = [Math.pow(x, 2) - Math.pow(y, 2), 2*x*y]
    return z_sq;
  }

  function mandelbrot(c) {
    var zn = [0, 0];
    var n = 0;
    while (n <= MAX_SEQ) {
      var zn_sq = complex_square(zn);
      zn = complex_add(zn_sq, c);

      if (complex_abs(zn) > 2) {
        return n;
      }
      n++;
    }
    return -1;
  }

  function draw_mandelbrot(colorMap) {

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var pixelindex = (y * width + x) * 4;

            cx = -2 + (3 / (width - 1)) * x;
            cy = -1 + (2 / (height - 1)) * y;

            m = mandelbrot([cx, cy]);

            if (m == -1) {
              var red = 0;
              var green = 0;
              var blue = 0;
            } else {
              var color_index = m % 16;
              var red = colorMap[color_index]["red"];
              var green = colorMap[color_index]["green"];
              var blue = colorMap[color_index]["blue"];
            }

            // Set the pixel data
            imagedata.data[pixelindex] = red;     // Red
            imagedata.data[pixelindex+1] = green; // Green
            imagedata.data[pixelindex+2] = blue;  // Blue
            imagedata.data[pixelindex+3] = 0;   // Alpha
        }
    }
  }

  function change_alpha(color_mod, duration){
      //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
      var timestamp = new Date().getTime();
      var runtime = timestamp - starttime;
      var progress = runtime / duration;
      progress = Math.min(progress, 1);

      for (var x = 0; x < width; x++) {
          for (var y = 0; y < height; y++) {
              var pixelindex = (y * width + x) * 4;
              switch(color_mod) {
                case 0:
                	if (imagedata.data[pixelindex] == 247) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 1:
                	if (imagedata.data[pixelindex] == 233) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 2:
                	if (imagedata.data[pixelindex] == 217) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 3:
                	if (imagedata.data[pixelindex] == 197) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 4:
                	if (imagedata.data[pixelindex] == 177) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 5:
                	if (imagedata.data[pixelindex] == 158) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 6:
                	if (imagedata.data[pixelindex] == 147) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 7:
                	if (imagedata.data[pixelindex] == 146) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 8:
                	if (imagedata.data[pixelindex] == 164) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 9:
                	if (imagedata.data[pixelindex] == 165) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 10:
                	if (imagedata.data[pixelindex] == 156) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 11:
                	if (imagedata.data[pixelindex] == 200) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 12:
                	if (imagedata.data[pixelindex] == 234) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 13:
                	if (imagedata.data[pixelindex] == 249) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 14:
                	if (imagedata.data[pixelindex] == 245) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
                case 15:
                	if (imagedata.data[pixelindex] == 232) {
                		imagedata.data[pixelindex+3] = 255;   // Alpha
                	}
                break;
              default:
                break;
            }
          }
      }
      context.putImageData(imagedata, 0, 0);
      if (runtime < duration) { // if duration not met yet
          requestAnimationFrame(function(){ // call requestAnimationFrame again with parameters
            setTimeout(function() {
              change_alpha(color_mod + 1, duration) }, 30);
          })
      }
  }

  // Main loop
  function main(tframe) {

        var colorMap = colorMapping();
        draw_mandelbrot(colorMap);

        //window.requestAnimationFrame(draw_mandelbrot);
        requestAnimationFrame(function(){
            starttime = new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
            change_alpha(0, 1000000000000);
        })
  }

  // Call the main loop
  main(0)
};
