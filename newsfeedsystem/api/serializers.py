from rest_framework import serializers
from .models import News, Comment, Group, User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        #fields = '__all__'
        exclude = ('password', )
        depth = 1 


class NewsSerializer(serializers.ModelSerializer):

    author = UserSerializer()

    class Meta:
        model = News
        # fields = ('title', 'desc', 'author')
        fields = '__all__'
        depth = 1


class CommentSerializer(serializers.ModelSerializer):

    author = UserSerializer()

    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = '__all__'
