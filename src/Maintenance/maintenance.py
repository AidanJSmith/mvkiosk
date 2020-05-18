import time,requests
from bs4 import BeautifulSoup
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import sys,os

# Note that credentials aren't  going to work on the main build, as they're ignored. Add your own, cloners!

cred = credentials.Certificate(os.getcwd()+"\\src\\Maintenance\\credentials.json")

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://mvhs-kiosk-1d7a4.firebaseio.com'
})


while True:
    #Get the cards part of the database
    ref = db.reference('Oracalendar')
   #The oracle scraper starts Here
    oracle = requests.get('https://www.mvhsoracle.com/')
    oracle = BeautifulSoup(oracle.text, 'html.parser')
    items=oracle.findAll("div", {"class": "item"}) #Get the 5 front page articles. BeautifulSoup is great, eh?
    newcards={}
    for card in items:
        newcard= { #Digs through the HTMl to find relevant types.
            "imgurl":card.find("img")["data-large-file"], 
             "name":card.find("a",{"class":"item-heading"}).text,
             "time":card.find("time")["datetime"],
             "type":"article",
             "link":card.find("a",{"class":"item-heading"})["href"]
            }
        #Find the body of the card
        newarticle=BeautifulSoup(requests.get(card.find("a",{"class":"item-heading"})["href"]).text,'html.parser') #Makes an HTTPS Request to the Oracle servers and finds the article.
        body=newarticle.find("div",{"class":"post-content"}).text[:150] #Find the body.
        newcard["body"]=body
        newcards[newcard["name"]]=newcard
        print(newcard["name"])
    ref.set(newcards)

    print("Database Maintenance Finished.")
    sys.stdout.flush()
    break;