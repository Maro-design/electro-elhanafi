const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/data/products.js');
let data = fs.readFileSync(file, 'utf8');

const imageMap = {
  "iPhone 17 Pro Max": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-01.jpg",
  "iPhone 17 Pro": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-01.jpg",
  "iPhone 17": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-01.jpg",
  "iPhone 16 Pro Max": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-01.jpg",
  "iPhone 16 Pro": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-01.jpg",
  "iPhone 16": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-01.jpg",
  "iPhone 15 Pro Max": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
  "iPhone 15 Pro": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-01.jpg",
  "iPhone 15": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-01.jpg",
  "iPhone 14": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-01.jpg",
  "iPhone 13 Pro Max": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg",
  "iPhone 13 Pro": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-1.jpg",
  "iPhone 13": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
  "iPhone 12": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-01.jpg",
  "iPhone 11 Pro Max": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-max-1.jpg",
  "iPhone 11 Pro": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-pro-1.jpg",
  "iPhone 11": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2019-1.jpg",
  "iPhone XR": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xr-1.jpg"
};

for (const [name, url] of Object.entries(imageMap)) {
  const regexImg = new RegExp(`name:\\s*"${name}".*?img:\\s*"([^"]+)"`, 'gs');
  data = data.replace(regexImg, (match) => {
    return match.replace(/img:\s*"[^"]+"/, `img: "${url}"`);
  });

  const regexThumb = new RegExp(`name:\\s*"${name}".*?thumbnails:\\s*\\["([^"]+)"\\]`, 'gs');
  data = data.replace(regexThumb, (match) => {
    return match.replace(/thumbnails:\s*\\["[^"]+"\\]/, `thumbnails: ["${url}"]`);
  });
}

fs.writeFileSync(file, data);
console.log('done');
