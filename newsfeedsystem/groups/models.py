from django.db import models

class Group(models.Model):
    name = models.CharField(max_length=20)
    is_allowed_to_add_post = models.BooleanField(default=False)
    is_allowed_to_edit_post = models.BooleanField(default=False)
    is_allowed_to_drop_post = models.BooleanField(default=False)
    is_allowed_to_add_mod = models.BooleanField(default=False)
    is_allowed_to_manage = models.BooleanField(default=False)
    is_allowed_to_stat = models.BooleanField(default=False)

    def __str__(self):
        return self.name
