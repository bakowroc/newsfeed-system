from rest_framework import serializers
from news.models import News
from users.api.serializers import UserSerializer, UserCreateSerializer

class NewsCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        exclude = ['date']


class NewsSerializer(serializers.ModelSerializer):

    author = UserSerializer()

    class Meta:
        model = News
        fields = '__all__'
        depth = 1


class NewsDetailSerializer(serializers.ModelSerializer):

    author = UserSerializer()

    class Meta:
        model = News
        fields = '__all__'
        depth = 1
