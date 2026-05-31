import urllib.request
import urllib.parse
import re
import json

def get_images(query):
    url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'vqd=.*?uddg=(.*?)\"', html)
        decoded = [urllib.parse.unquote(l) for l in links if 'http' in l]
        return decoded[:9]
    except Exception as e:
        return str(e)

print(json.dumps({
    'school': get_images('indian school students uniform minimalistic site:pexels.com'),
    'college': get_images('indian college students university campus site:pexels.com'),
    'corporate': get_images('indian corporate business office workers formal site:pexels.com'),
    'hospital': get_images('indian doctors nurses hospital scrubs clinic site:pexels.com'),
    'hotel': get_images('indian hotel staff hospitality concierge uniform site:pexels.com')
}, indent=2))
