from TikTokAPI import TikTokAPI
import json
import datetime

api = TikTokAPI()

def get_all_video_stats_by_username(username):
    user = api.getUserByName(username)
    video_list = []
    videos = api.getVideosByUserName(username, count=user['userInfo']['stats']['videoCount'])['items']
    for item in videos:
        video_list.append({
            'id': item['id'],
            'stats': item['stats'],
            'createTime': item['createTime']
        })
    return video_list

def video_stats_7_days(username):
    return get_video_stats_by_username_date(username, (datetime.datetime.today()-datetime.timedelta(days=7)).timestamp())

def video_stats_30_days(username):
    return get_video_stats_by_username_date(username, (datetime.datetime.today()-datetime.timedelta(days=30)).timestamp())

def video_stats_all_time(username):
    return get_all_video_stats_by_username(username)

def get_video_stats_by_username_date(username, date):
    video_stats = get_all_video_stats_by_username(username)
    an_iterator = filter(lambda video_stat: video_stat['createTime'] > date, video_stats)

    return list(an_iterator)

print(len(video_stats_30_days('resolutionmovement')))
