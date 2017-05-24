from rest_framework import serializers
from .models import News, Comment, Group, User

class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        # fields = ('title', 'desc', 'author')
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'
