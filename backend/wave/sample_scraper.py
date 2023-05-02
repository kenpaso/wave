import requests
from bs4 import BeautifulSoup
import re

BASE_URL = "https://www.whosampled.com/"


class Sample:
    def __init__(self, title, artist, year):
        self.title = title
        self.artist = artist
        self.year = year
    def description(self):
        print(F"Title: {self.title}\nArtist: {self.artist}\nYear: {self.year}")

def getDate(string):
    pattern = r"\d+"  # Matches one or more digits
    match = re.search(pattern, string)
    if match:
        date = match.group()
        return date 
    return None

def scrape(artist, song_title):

    url = F"{BASE_URL}{artist}/{song_title}/"
    headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0',
    'Referer': url,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive',
    }   

    print(url)
    response = requests.get(url, headers=headers)
    if response.ok:
        html_content = response.content
        soup = BeautifulSoup(html_content, 'html.parser', from_encoding="utf-8")
        # print(soup.prettify())
        return findSamples(soup)
    else:
        print(response.reason)
        print(F"Problem with the url. Received status code: {response.status_code}")


def scrapeSamples(artist, song_title):

    url = F"{BASE_URL}{artist}/{song_title}/samples"
    headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0',
    'Referer': url,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive',
    }   

    print(url)
    response = requests.get(url, headers=headers)
    if response.ok:
        html_content = response.content
        soup = BeautifulSoup(html_content, 'html.parser', from_encoding="utf-8")
        # print(soup.prettify())
        return findSamples(soup)
    else:
        print(response.reason)
        print(F"Problem with the url. Received status code: {response.status_code}")

def scrapeSampled(artist, song_title):

    url = F"{BASE_URL}{artist}/{song_title}/sampled"
    headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0',
    'Referer': url,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive',
    }   

    print(url)
    response = requests.get(url, headers=headers)
    if response.ok:
        html_content = response.content
        soup = BeautifulSoup(html_content, 'html.parser', from_encoding="utf-8")
        # print(soup.prettify())
        return findSamples(soup)
    else:
        print(response.reason)
        print(F"Problem with the url. Received status code: {response.status_code}")

def findSamples(soup):
    samples = []
    main = soup.find('main', {'id': 'container'})
    content = main.find('div', {'id': 'content'})
    sections = content.find_all('section')
    
    sample_containers = []
    for x in sections:
        _x = x.find('div', {'class': 'list bordered-list'})
        if _x is not None:
            sample_containers.append(_x)
    sampleEntries = []
    for x in sample_containers:
        _x = x.find_all('div', {'class': 'listEntry sampleEntry'})
        if _x is not None:
            sampleEntries.append(_x)
    
    sampleTitles = []
    if len(sampleEntries) > 0:
        
        for x in sampleEntries[0]:
            tracks = x.find_all('a', {'class': 'trackName playIcon'})
            trackDetails = x.find_all('div', {'class': 'trackDetails'})
            title = ""

            if tracks is not None:
                for i in tracks:
                    if i["title"] is not None:
                        title = i["title"]
            if trackDetails is not None:
                for i in trackDetails:
                    _x = i.find('span', {'class': 'trackArtist'})
                    if _x is not None:
                        _y = _x.find('a')
                        details = _x.get_text()

                        if _y is not None and details is not None:
                            artist = _y.get_text()
                            year = details.split(" ")
                            f = year[len(year) - 1]
                            year = getDate(f)
                            
                            if year is not None:
                                samples.append(Sample(str(title), str(artist), int(year)))
        return samples
    
 
    


for x in scrapeSamples("drake", "rich-flex"):
    x.description()
print()
print()
for x in scrapeSampled("abba", "dancing-queen"):
    x.description()


