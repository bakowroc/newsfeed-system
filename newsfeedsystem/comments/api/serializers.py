from rest_framework import serializers
from comments.models import Comment

from users.api.serializers import UserSerializer, UserCreateSerializer
from news.api.serializers import NewsSerializer, NewsCreateSerializer


class CommentCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        exclude = ['date']


class CommentSerializer(serializers.ModelSerializer):

    author = UserSerializer()
    related_news = NewsSerializer()

    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1


class CommentDetailSerializer(serializers.ModelSerializer):

    author = UserSerializer()
    related_news = NewsSerializer()

    class Meta:
        model = Comment
        depth = 1
