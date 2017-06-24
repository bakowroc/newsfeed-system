from rest_framework.generics import(
                                CreateAPIView,
                                ListAPIView,
                                RetrieveAPIView,
                                DestroyAPIView,
                                UpdateAPIView,
                                )


from rest_framework.permissions import (
                            AllowAny,
                            IsAuthenticated,
                            IsAdminUser,
                            IsAuthenticatedOrReadOnly
                            )



from marks.models import Mark
from marks.api.serializers import (
                                MarkSerializer,
                                MarkDetailSerializer,
                                MarkCreateSerializer,
                                )

class MarkCreate(CreateAPIView):
    queryset = Mark.objects.all()
    serializer_class = MarkCreateSerializer
    permission_classes = [AllowAny]


class MarkDetail(RetrieveAPIView):
    queryset = Mark.objects.all()
    serializer_class = MarkDetailSerializer
    permission_classes = [AllowAny]


class MarkDestroy(DestroyAPIView):
    queryset = Mark.objects.all()
    serializer_class = MarkDetailSerializer


class MarkList(ListAPIView):
    queryset = Mark.objects.all()
    serializer_class = MarkSerializer
    permission_classes = [AllowAny]

class MarkUpdate(UpdateAPIView):
    queryset = Mark.objects.all()
    serializer_class = MarkDetailSerializer
    permission_classes = [IsAdminUser]
