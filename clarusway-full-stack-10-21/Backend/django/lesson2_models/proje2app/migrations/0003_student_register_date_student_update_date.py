# Generated by Django 4.0.4 on 2022-05-16 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proje2app', '0002_alter_student_options_student_about_student_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='register_date',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='student',
            name='update_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
