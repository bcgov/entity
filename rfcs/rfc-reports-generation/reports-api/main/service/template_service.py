import os
import os.path
import fnmatch


class TemplateService:

    @staticmethod
    def get_all_templates():
        template_names = []
        list_of_files = os.listdir('main/templates')
        for filename in list_of_files:
            if fnmatch.fnmatch(filename, '*.html'):
                template_names.append(os.path.splitext(filename)[0])
        return template_names
