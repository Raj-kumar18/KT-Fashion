const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function search(query) {
  const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query);
  const html = await fetch(url);
  const links = [];
  const regex = /vqd=.*?uddg=(.*?)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const decoded = decodeURIComponent(match[1]);
    if (decoded.includes('http')) {
      links.push(decoded);
    }
  }
  return links.slice(0, 9);
}

async function run() {
  const results = {
    school: await search('indian school students uniform site:unsplash.com'),
    college: await search('indian college students university campus site:unsplash.com'),
    corporate: await search('indian corporate business office workers formal site:unsplash.com'),
    hospital: await search('indian doctors nurses hospital scrubs clinic site:unsplash.com'),
    hotel: await search('indian hotel staff hospitality concierge uniform site:unsplash.com')
  };
  console.log(JSON.stringify(results, null, 2));
}

run();
