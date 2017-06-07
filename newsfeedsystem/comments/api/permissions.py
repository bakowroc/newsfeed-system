from rest_framework.permissions import BasePermission

class IsOwner(BasePermission):
    message = 'You must be the owner of this comment'
    safe_method = ['PUT']

    def has_permission(self, request, view):
        if request.method in self.safe_method:
            return True
        return False

    def has_object_permission(self, request, view ,obj):
        if request.method in self.safe_method:
            return True
        return obj.author == request.user
