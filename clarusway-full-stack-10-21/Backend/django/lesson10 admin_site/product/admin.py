from django.contrib import admin
from .models import Product


class ProductAdmin(admin.ModelAdmin):
    list_display = ("name","create_date","update_date","is_in_stock",)
    list_editable = ("name",'is_in_stock',)
    list_display_links = ( "update_date",)
    list_filter =("is_in_stock","create_date")
    ordering = ("name",)
    search_fields = ("name",)
    prepopulated_fields = {"slug" : ("name",)}
    list_per_page = 5
    date_hierarchy = "create_date"
    

admin.site.register(Product,ProductAdmin)

admin.site.site_title = "Bu sayfa admin olan Murat ın sayfasıdır"
admin.site.site_header = "Murat Dashboard"
admin.site.index_title = "Hoşgeldiniz"
