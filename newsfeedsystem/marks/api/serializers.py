from rest_framework import serializers
from marks.models import Mark

from users.api.serializers import UserSerializer, UserCreateSerializer
from news.api.serializers import NewsSerializer, NewsCreateSerializer


class MarkCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mark


class MarkSerializer(serializers.ModelSerializer):

    news = NewsSerializer()

    class Meta:
        model = Mark
        fields = '__all__'
        depth = 1


class MarkDetailSerializer(serializers.ModelSerializer):

    news = NewsSerializer()

    class Meta:
        model = Mark
        depth = 1
