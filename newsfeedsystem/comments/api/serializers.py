from rest_framework import serializers
from comments.models import Comment

from users.api.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):

    author = UserSerializer()

    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1
