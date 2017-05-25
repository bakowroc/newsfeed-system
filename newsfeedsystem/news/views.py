from rest_framework.generics import(
                            ListAPIView,
                            RetrieveAPIView,
                            DestroyAPIView,
                            UpdateAPIView,
                            )


from news.models import News
from news.api.serializers import NewsSerializer, NewsDetailSerializer


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
