from rest_framework import serializers
from rest_framework.response import Response
from news.models import News
from comments.models import Comment
from users.api.serializers import UserSerializer, UserCreateSerializer
import json



class NewsCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        exclude = ['date', 'author']


class NewsSerializer(serializers.ModelSerializer):

    author = UserSerializer()


    class Meta:
        model = News
        fields = '__all__'
        depth = 1




class NewsDetailSerializer(serializers.ModelSerializer):

    author = UserSerializer()
    comments = serializers.SerializerMethodField('get_my_comments')

    class Meta:
        model = News
        fields = '__all__'
        depth = 1


    def get_my_comments(self, obj):
        json_data = []
        data = Comment.objects.filter(related_news = obj).values('author', 'content', 'date')
        for obj in data:
            json_data.append({
                'author': obj['author'],
                'content': obj['content'],
                'date': obj['date']
            })

        return json_data
