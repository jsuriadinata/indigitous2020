from TikTokAPI import TikTokAPI
import json

api = TikTokAPI()

def get_video_stats_by_username(username, count):
    video_list = []
    videos = api.getVideosByUserName(username, count)['items']
    for item in videos:
        video_list.append(item['stats'])
    return video_list
