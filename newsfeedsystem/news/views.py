from rest_framework.generics import (
                            CreateAPIView,
                            ListAPIView,
                            RetrieveAPIView,
                            DestroyAPIView,
                            UpdateAPIView,
                            )


from news.models import News
from news.api.serializers import (
                            NewsSerializer,
                            NewsDetailSerializer,
                            NewsCreateSerializer,
                            )


class NewsCreate(CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsCreateSerializer


class NewsDetail(RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer


class NewsDestroy(DestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer


class NewsList(ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsUpdate(UpdateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer
