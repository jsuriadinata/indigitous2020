from instagram_private_api import Client, ClientCompatPatch
import pandas as pd

df = pd.DataFrame(columns = ['post_code', 'post_time', 'post_likes', 'post_comments', 'post_link'])

user_name = 'resolution_movement_follower'
password = 'resmvt'

api = Client(user_name, password)
results = api.feed_timeline()

items = [item for item in results.get('feed_items', [])
         if item.get('media_or_ad')]
for item in items:
    # Manually patch the entity to match the public api as closely as possible, optional
    # To automatically patch entities, initialise the Client with auto_patch=True
    ClientCompatPatch.media(item['media_or_ad'])
    post_code = item['media_or_ad']["code"]
    post_time = item['media_or_ad']['taken_at']
    post_link = item['media_or_ad']["link"]
    post_likes = item['media_or_ad']['likes']['count']
    post_comments = item['media_or_ad']['comments']['count']
    df = df.append({'post_code':post_code,'post_time':post_time,'post_likes':post_likes, 'post_comments':post_comments,'post_link':post_link}, ignore_index = True)
df.to_csv('instagram.csv')
    
