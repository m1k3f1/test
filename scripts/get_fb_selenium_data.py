#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import json
from bs4 import BeautifulSoup
import time
import re
try:
    from urllib.request import urlopen, Request
except ImportError:
    from urllib2 import urlopen, Request


app_id = "191376204731072"
app_secret = "ad3a1ce51ce129adfb3f0c336ff562f6"  # DO NOT SHARE WITH ANYONE!


### Function get Data from text
def getData(text,search):
    data=''
    match = re.search(search, text)
    if match:
        data=getSubString(text,search,0)
        
    return data 

def getSubString(text,search,idx):
    begin=text.index(search)+len(search)
    text=text[begin:len(text)]
    splitText=text.split('\n')
    data=splitText[idx]
    return data        
     
      
def getLinkData(textLink,search,partial):
    
    data=''
    try:
        if partial:
            link=driver.find_element_by_partial_link_text(textLink)
        else:
            link=driver.find_element_by_link_text(textLink)
        
        link.click()
        time.sleep(10)
    
        elements = driver.find_elements_by_class_name("uiList")
        for el in elements:
            text=el.text
            if search in text:
                data=getSubString(text,search,1)
                data=data.replace('\n',',')
    except ValueError:
        print 'Error'
    except:
        data='page'

    return data

def request_until_succeed(url):
    req = Request(url)
    success = False
    while success is False:
        try:
            response = urlopen(req)
            if response.getcode() == 200:
                success = True
        except Exception as e:
            print(e)
            time.sleep(5)
            print("Error for URL {}: {}".format(url, datetime.datetime.now()))
            print("Retrying.")

    return response.read()       
    

print '--------HOLA---------------'


#data File
path = '/Users/miyelliordaz/Documents/PROYECTOS/DANAVIS/Prototipo/craw/'

#read file
fileFollowers = open (path+'UserCommentsIdMargaritaZavalaMX.csv','r') 
followers = fileFollowers.readlines()
#followers = ['1608611315839249', '1497827226944334','125448414737832','1057916827677946']
#page: 467002447000778
#followers = ['1608611315839249','711321002386654','467002447000778']
#followers = ['467002447000778']


driver = webdriver.Chrome('/Users/miyelliordaz/Documents/PROYECTOS/DANAVIS/Prototipo/driver/chromedriver')
#driver = webdriver.Firefox('/Applications/Firefox.app/Contents/MacOS/')
#driver =  webdriver.Firefox()


#pagina inicial para lanzar selenium
driver.get("https://www.facebook.com/pamela.alberro.1")
inputEmail = driver.find_element_by_id("email")
#agregar mail de cuenta 
inputEmail.send_keys("mordaz@danavis.mx")
#agregar pass de cuenta
inputPass = driver.find_element_by_id("pass")
inputPass.send_keys("A0a1a2a3a4")
inputPass.submit()

split='|'

header='id'+split+'Gender'+split+'Live'+split+'Studied'+split+'Work'
listData=[header]


print 'Procesando...'

for follow in followers:
    
    
    #print follow
    follow=follow.replace('\n','')
    
    link="https://www.facebook.com/"
    #ir a su pagina
    driver.get(link+follow)
    time.sleep(5)
    concurrent=driver.current_url
    
    link=driver.find_element_by_link_text("About")
    link.click()
    time.sleep(5)
    
    liveData=getLinkData("Places ",'Current city',1)
    WorkData=getLinkData("Work and Education",'WORK',0)
    GenderData=getLinkData("Contact and Basic Info",'Gender',0)
    EducationData=getLinkData("Work and Education",'EDUCATION',0)
    
    data=follow+split+GenderData+split+liveData+split+EducationData+split+WorkData
    
    print data
    
    time.sleep(5)
    
    listData.append(data.encode('utf-8'))

fileFollowers.close()      
driver.close()

print 'Escribiendo archivo final...'
#### Write FILE
archivo = open (path+'user_data.csv','w') 
for item in listData:
  archivo.write("%s\n" % item)
archivo.close()
print '--------ADIOS---------------'
