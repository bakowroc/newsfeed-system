from rest_framework import serializers
from news.models import News
from users.api.serializers import UserSerializer

class NewsSerializer(serializers.ModelSerializer):

    author = UserSerializer()

    class Meta:
        model = News
        # fields = ('title', 'desc', 'author')
        fields = '__all__'
        depth = 1
