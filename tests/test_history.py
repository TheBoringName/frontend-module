import time
import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

from tests.history_utils import expand_info, info_expanded
from tests.navigation_utils import go_to_history
from tests.web_driver_utils import WebDriverUtils


class HistoryTest(unittest.TestCase):
    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_experimental_option('excludeSwitches', ['enable-logging'])

        self.driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),
            options=options
        )
        self.driver.maximize_window()
        self.base_url = "http://localhost:3000/"
        self.driver.get(self.base_url)
        self.wait = WebDriverWait(self.driver, 10)

    def test_expand_info(self):
        web_driver_utils = WebDriverUtils(driver=self.driver)
        go_to_history(web_driver_utils)
        expand_info(web_driver_utils)
        assert info_expanded(driver=self.driver)

    def test_hide_info(self):
        web_driver_utils = WebDriverUtils(driver=self.driver)
        go_to_history(web_driver_utils)
        expand_info(web_driver_utils)
        expand_info(web_driver_utils)
        assert not info_expanded(driver=self.driver)


    def tearDown(self):
        self.driver.quit()
if __name__ == '__main__':
    unittest.main()
