from rest_framework import serializers
from news.models import News
from comments.models import Comment
from users.api.serializers import UserSerializer, UserCreateSerializer



class NewsCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        exclude = ['date', 'author']


class NewsSerializer(serializers.ModelSerializer):

    author = UserSerializer()
    comments = serializers.SerializerMethodField('get_my_comments')

    class Meta:
        model = News
        fields = '__all__'
        depth = 1

    def get_my_comments(self, obj):
        return Comment.objects.filter(related_news = obj)


class NewsDetailSerializer(serializers.ModelSerializer):

    author = UserSerializer()

    class Meta:
        model = News
        fields = '__all__'
        depth = 1
