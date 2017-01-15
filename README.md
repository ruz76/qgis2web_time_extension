# qgis2web_time_extension
Time extension for qgis2web plugin

To activate extension you have to copy ui_timedialog.py to plugin
and add two lines of code to ui_maindialog.py

1. in header import ui_timedialog
from ui_timedialog import Ui_TimeDialog #time

2. in setupUi place after 
self.tabWidget.addTab(self.tab_2, _fromUtf8(""))
this line
uitime = Ui_TimeDialog(self.tabWidget, MainDialog) #time
