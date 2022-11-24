import React, {Component} from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
     articles = [
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "Paytm Shares' 75% Plunge Is World's Worst In Decade Among Large IPOs - NDTV Profit",
        "description": "Paytm has capped the worst first-year share plunge among large IPOs over the past decade -- and the pain is worsening.",
        "url": "https://www.ndtv.com/business/paytm-shares-75-plunge-is-worlds-worst-in-a-decade-among-large-ipos-3548736",
        "urlToImage": "https://c.ndtvimg.com/2022-11/05e4dpf_bloomberg-image_625x300_24_November_22.jpg",
        "publishedAt": "2022-11-24T08:03:00Z",
        "content": "Paytm's 75% slump is worlds worst for large IPOs in a decade\r\nOne 97 Communications Ltd., the operator of India's largest digital-payments provider known as Paytm, has capped the worst first-year sha… [+2692 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Express Web Desk",
        "title": "SC questions 'lightning speed' of Election Commissioner Arun Goel's appointment - The Indian Express",
        "description": "On being asked as to how the Law Minister shortlisted four names for recommendation to the Prime Minister, Attorney General R Venkataramani replied that it was done on the basis of a database maintained by DoPT.",
        "url": "https://indianexpress.com/article/india/supreme-court-election-commissioner-arun-goel-appointment-centre-8286754/",
        "urlToImage": "https://images.indianexpress.com/2022/11/Arun-Goel.jpeg",
        "publishedAt": "2022-11-24T07:57:16Z",
        "content": "The Supreme Court Thursday questioned the lightning speed at which Arun Goels name was finalised as the new Election Commissioner, after the Centre placed the original file of his appointment before … [+1660 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "Pakistan's New Army Chief Is Lieutenant General Asim Munir - NDTV",
        "description": "Pakistan's Prime Minister Shehbaz Sharif on Thursday named Lieutenant-General Asim Munir as the new chief of the country's powerful army.",
        "url": "https://www.ndtv.com/world-news/pakistans-new-army-chief-is-lieutenant-general-asim-munir-3548900",
        "urlToImage": "https://c.ndtvimg.com/2018-10/uoaor25g_pak-new-isi-chief-asim-munir_october_ani-_625x300_10_October_18.jpg",
        "publishedAt": "2022-11-24T07:28:00Z",
        "content": "The new chief will take over from outgoing General Qamar Javed Bajwa.\r\nIslamabad: Pakistan on Thursday named Lieutenant-General Asim Munir as chief of the army, an organisation that plays an extraord… [+1502 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "AFP",
        "title": "Record number of children miss measles vaccine: Global report - Economic Times",
        "description": "WHO chief Tedros Adhanom Ghebreyesus noted the irony in the fact that while vaccines against Covid were developed and deployed in record time, routine immunization programs were badly impacted, leaving millions at risk.",
        "url": "https://economictimes.indiatimes.com/news/international/world-news/record-number-of-children-miss-measles-vaccine-global-report/articleshow/95734503.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-95734596,width-1070,height-580,imgsize-86204,overlay-economictimes/photo.jpg",
        "publishedAt": "2022-11-24T07:25:00Z",
        "content": "A record high of nearly 40 million children around the world missed a measles vaccine dose in 2021, according to a new report Wednesday that found immunization levels had failed to rebound from disru… [+1974 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Devdiscourse"
        },
        "author": "Devdiscourse News Desk",
        "title": "NASA restores contact with Orion spacecraft after a 47-minute blackout - Devdiscourse",
        "description": "Read more about NASA restores contact with Orion spacecraft after a 47-minute blackout  on Devdiscourse",
        "url": "https://www.devdiscourse.com/article/science-environment/2263312-nasa-restores-contact-with-orion-spacecraft-after-a-47-minute-blackout",
        "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/20_04_2022_16_31_31_4566198.png?width=920&format=jpeg",
        "publishedAt": "2022-11-24T07:10:08Z",
        "content": "On Thursday, November 23, NASA's Mission Control Center in Houston unexpectedly lost contact with the Artemis I Orion spacecraft for 47 minutes, beginning at 12:09 a.m., while reconfiguring the commu… [+1843 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Weather Channel"
        },
        "author": "The Weather Channel",
        "title": "Webb Telescope Reveals Chemical Profile of Exoplanet Atmosphere As Never Seen Before! | Weather.com - The Weather Channel",
        "description": "WASP-39 b, an orbiting planet about the mass of Saturn orbiting a star 700 light-years away, was observed with the telescope's array of highly sensitive instruments.",
        "url": "https://weather.com/en-IN/india/space/news/2022-11-24-james-webb-telescope-never-seen-before-exoplanet-atmosphere",
        "urlToImage": "https://s.w-x.co/in-exoplanet_wasp39.jpg",
        "publishedAt": "2022-11-24T07:05:20Z",
        "content": "NASA's James Webb Space Telescope has revealed another first a molecular and chemical profile of a distant world's skies.\r\nPreviously, Webb and other space telescopes, including NASA's Hubble and Spi… [+1630 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daijiworld.com"
        },
        "author": null,
        "title": "Mangaluru blast: Accused wanted to target children's fest, say sources - Daijiworld.com",
        "description": "Bengaluru, Nov 24 (IANS): Mangaluru auto blast accused Mohammad Shariq wanted to carry out an explosion at a children's fest organised by one of the organisations affiliated to Rashtriya Swayamsevak Sangh (RSS), sources said on Thursday.\r\nAccording to them, t…",
        "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1022686",
        "urlToImage": "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/allwyn_241122_blast.jpg",
        "publishedAt": "2022-11-24T06:33:10Z",
        "content": "Bengaluru, Nov 24 (IANS): Mangaluru auto blast accused Mohammad Shariq wanted to carry out an explosion at a children's fest organised by one of the organisations affiliated to Rashtriya Swayamsevak … [+2013 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "BMC appeals for vaccination amid hike in Measles cases in Mumbai - Business Standard",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMijgFodHRwczovL3d3dy5idXNpbmVzcy1zdGFuZGFyZC5jb20vYXJ0aWNsZS9jdXJyZW50LWFmZmFpcnMvYm1jLWFwcGVhbHMtZm9yLXZhY2NpbmF0aW9uLWFtaWQtaGlrZS1pbi1tZWFzbGVzLWNhc2VzLWluLW11bWJhaS0xMjIxMTI0MDAyOTNfMS5odG1s0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-11-24T06:32:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Black Friday Deals 2022: Samsung Galaxy S22 5G at just 21999 on Samsung Store! - HT Tech",
        "description": "Black Friday Deals 2022: The Samsung Galaxy S22 5G can be yours for just 21999! Check out the offer details on the Samsung Store below.",
        "url": "https://tech.hindustantimes.com/mobile/news/black-friday-deals-2022-samsung-galaxy-s22-5g-at-just-21999-on-samsung-store-71669270625687.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2022/11/24/1600x900/DSC_1667_1_1669270728899_1669270729040_1669270729040.jpg",
        "publishedAt": "2022-11-24T06:23:39Z",
        "content": "Black Friday Deals 2022: Samsung Store's Black Friday Deals are live! You can grab amazing discounts on smartphones, accessories, electronics and more. Samsung Store has massively reduced the price o… [+2089 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Moneycontrol"
        },
        "author": "Rakesh Patil",
        "title": "Market LIVE Updates: Indices near day's high with Nifty around 18,350; IT, PSU bank, FMCG gains - Moneycontrol",
        "description": "Stock Market LIVE Updates: PSU Bank, IT, FMCG, oil &amp; gas and power indices up 0.5-1 percent.",
        "url": "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-november-24-latest-news-bse-nse-sensex-nifty-covid-coronavirus-keystone-realtors-iifl-wealth-management-heg-mm-financial-services-can-fin-homes-hg-infra-9590561.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg",
        "publishedAt": "2022-11-24T06:19:26Z",
        "content": "November 24, 2022 / 12:09 PM IST\r\nL&amp;T Construction wins a significant order\r\nThe Heavy Civil Infrastructure Business of Larsen &amp; Toubro has secured an order from the prestigious Greenko group… [+468 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Livemint"
        },
        "author": "PTI",
        "title": "Why Ramesh Chauhan wants to sell Bisleri | Mint - Mint",
        "description": "Ramesh Chauhan said he is in discussions with several prospective buyers for selling Bisleri",
        "url": "https://www.livemint.com/companies/news/why-ramesh-chauhan-wants-to-sell-bisleri-11669269853950.html",
        "urlToImage": "https://images.livemint.com/img/2022/11/24/600x338/bisleri_1669269934258_1669269934395_1669269934395.jpg",
        "publishedAt": "2022-11-24T06:08:47Z",
        "content": "Veteran industrialist Ramesh Chauhan on Thursday said he is scouting for a buyer for his packaged water business Bisleri International and is in talks with several players, including Tata Consumer Pr… [+2247 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Tech Desk",
        "title": "WhatsApp Calls on desktops set to finally get a dedicated tab - The Indian Express",
        "description": "WhatsApp calls were available on the Windows and Mac versions of the platform, but the experience wasn't the same and features like call logs were missing.",
        "url": "https://indianexpress.com/article/technology/tech-news-technology/whatsapp-calls-on-desktops-set-to-finally-get-a-dedicated-tab-8286775/",
        "urlToImage": "https://images.indianexpress.com/2022/11/WhatsApp-IE.jpg",
        "publishedAt": "2022-11-24T06:00:40Z",
        "content": "WhatsApps messaging features need no introduction. Theyre used by millions across the world and support for linked devices have made WhatsApps chat features accessible to more people than ever. Howev… [+1035 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "FIFA World Cup: Japan Team Cleans Up Locker Room After Historic Win Over Germany, Wins Hearts - NDTV",
        "description": "Not only that, the Japanese team even left a note that said \"thank you\" in Japanese and Arabic - with some folded paper cranes for good measure.",
        "url": "https://www.ndtv.com/world-news/fifa-world-cup-japan-team-cleans-up-locker-room-after-historic-win-over-germany-wins-hearts-3548631",
        "urlToImage": "https://c.ndtvimg.com/2022-11/pvldtu08_social-media-users-were-left-impressed-with-the-gesture_625x300_24_November_22.jpg",
        "publishedAt": "2022-11-24T05:26:12Z",
        "content": "Social media users were left impressed with the gesture\r\nOn Wednesday, Japan sealed a historic first-ever win against Germany in a 2022 World Cup group stage match in Qatar, prompting widespread cele… [+3606 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "India Today"
        },
        "author": "India Today Web Desk",
        "title": "Richa Chadha's 'Galwan says hi' tweet sparks row, actor trolled for 'mocking' Indian Army - India Today",
        "description": "Actor Richa Chadha's latest tweet 'Galwan says hi' has sparked controversy and the actor is being trolled on Twitter for 'mocking' the Indian Army. She tweeted a post reacting to the statement of Lt General Upendra Dwivedi that the Indian Army is ready to exe…",
        "url": "https://www.indiatoday.in/india/story/richa-chadha-galwan-tweet-sparks-row-mocking-indian-army-twitter-2301063-2022-11-24",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/richa_chadha-sixteen_nine.png?VersionId=9MjgqPbHLltLhS5fB2jhtV2ukTFTK7Od",
        "publishedAt": "2022-11-24T05:20:46Z",
        "content": "By India Today Web Desk: Bollywood actor Richa Chadha is facing the wrath of netizens on social media for her 'Galwan' tweet in which she reacted to the Northern Army Commander Lt General Upendra Dwi… [+3177 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "News18"
        },
        "author": "Tech Desk",
        "title": "Lava Blaze 5G to Receive Android 13 and Quarterly Updates for Two Years: All Details - News18",
        "description": "Lava's President and Business Head, Lava International Limited, Sunil Raina has claimed that Blaze 5G will receive quarterly software updates for 2 years and assured upgrade to Android 13.",
        "url": "https://www.news18.com/news/tech/lava-blaze-5g-to-receive-android-13-and-quarterly-updates-for-two-years-all-details-6456631.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/11/lava-blaze-5g-166789968616x9.jpg",
        "publishedAt": "2022-11-24T04:30:00Z",
        "content": "Homegrown brand Lava launched the 5G capable Lava Blaze 5G smartphone earlier this month, and now, the company has assured that the smartphone will get quarterly updates for the next two years, with … [+1022 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "Is Cristiano Ronaldo Headed To Saudi Arabia? Sports Minister Answers - NDTV Sports",
        "description": "In his interview to British journalist Piers Morgan, Cristiano Ronaldo had revealed that a Saudi Arabia club had offered him a two-year contract worth around 360 million dollars.",
        "url": "https://sports.ndtv.com/football/is-cristiano-ronaldo-headed-to-saudi-arabia-sports-minister-answers-3548458",
        "urlToImage": "https://c.ndtvimg.com/2022-11/7m09a9ig_ronaldo-afp-_625x300_20_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        "publishedAt": "2022-11-24T04:09:28Z",
        "content": "Football star Cristiano Ronaldo and Manchester United parted ways with a \"mutual agreement\" on Tuesday. It took place after Ronaldo's grave accusations, in a recent interview with British journalist … [+1360 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "Priyanka Gandhi, Sachin Pilot join Rahul-led Bharat Jodo Yatra in Madhya Pradesh - Hindustan Times",
        "description": "Pilot has joined the Bharat Jodo Yatra at a time when demands for the change of leadership have been raised again in Rajasthan. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/priyanka-gandhi-sachin-pilot-join-rahul-led-bharat-jodo-yatra-in-madhya-pradesh-101669261200694.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/11/24/1600x900/rahul_gandhi_priyanka_sachin_pilot_bharat_jodo_1669261377409_1669261377599_1669261377599.jpg",
        "publishedAt": "2022-11-24T04:08:39Z",
        "content": "Congress general secretary Priyanka Gandhi Vadra along with her husband and son joined Rahul Gandhi on Thursday during the Bharat Jodo Yatra, party's mass outreach programme which is currently going … [+1435 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "‘With all due to respect to Dravid…’: Harbhajan names better India T20I coach - Hindustan Times",
        "description": "Harbhajan Singh did not say it directly but he gave a clear indication that Ashish Nehra is better suited than Dravid to coach the Indian T20I side. | Cricket",
        "url": "https://www.hindustantimes.com/cricket/with-all-due-to-respect-to-rahul-dravid-harbhajan-singh-picks-india-t20i-coach-who-knows-better-101669261079396.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/11/24/1600x900/bhajji_Dravid_1669261604114_1669261665714_1669261665714.jpg",
        "publishedAt": "2022-11-24T03:57:40Z",
        "content": "There has been a lot of talk about the need to bring in more attacking players in the Indian T20I side after their disappointing shows in two T20 World Cups and the Asia Cup. They were knocked out fr… [+2285 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Gopal B Kateshiya",
        "title": "How a 36-sq km island has come to occupy prime space in BJP campaign - The Indian Express",
        "description": "Bet Dwarka, with a big Krishna temple, saw a demolition drive in Oct of illegal structures, including religious ones belonging to the minority community, now it figures in speeches of top BJP leaders",
        "url": "https://indianexpress.com/article/political-pulse/gujarat-elections-bet-dwarka-bjp-campaign-8286478/",
        "urlToImage": "https://images.indianexpress.com/2022/11/Dwarka-1.jpg",
        "publishedAt": "2022-11-24T03:56:58Z",
        "content": "Residents of Bet Dwarka, Okha town and local journalists were caught unawares as a huge contingent comprising policemen from four districts swamped Bet Dwarka island on October 1, accompanying JCB ex… [+4905 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "News18"
        },
        "author": "News Desk",
        "title": "Measles Outbreak: Mumbai's Toll Reaches 12; Centre Issues Advisory, Rushes Teams to 3 States | Details - News18",
        "description": "The advisory by the government comes amid an increased numbers of measles cases being reported from certain districts of Bihar, Gujarat, Haryana, Jharkhand, Kerala and Maharashtra",
        "url": "https://www.news18.com/news/india/measles-outbreak-maharashtra-mumbai-ahmedabad-ranchi-jharkhand-malappuram-kerala-govt-advisory-6456097.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/05/nurse-165217000416x9.jpg",
        "publishedAt": "2022-11-24T03:53:44Z",
        "content": "Sounding an alarm over measles outbreak, Centre has rushed teams to Ranchi, Ahmedabad and Malappuram to investigate and assist in management of rising trend of cases and also asked states to consider… [+5028 chars]"
        }
        ];

    constructor(){
        super();
        // console.log("Constructor of news component");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
    render(){
        return(
                <div className="container my-3">
                <h2>NewsPanda - Top Headlines</h2>
                <div className="row">

                <div className="col-md-4">
                    <NewsItem title = "title" description = "description" imageUrl="https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg" newsUrl= "Todo"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title = "title" description = "description" imageUrl="https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title = "title" description = "description" imageUrl="https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg"/>
                </div>
                
                </div>
               
                </div>
        )
    }
}