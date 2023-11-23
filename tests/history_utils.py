from selenium.common import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec



def expand_info(web_driver_utils):
    web_driver_utils\
        .click(xpath="/html/body/div[@id='root']/div[@class='page-box']/section[@class='fix-height padding-sides']/aside[1]/figure[@class='_main_76ws3_1']/p[@class='_arrow_76ws3_19']/img")

def info_expanded(driver=None):
    try:
        element = WebDriverWait(driver, 3).until(
            ec.element_to_be_clickable((By.CSS_SELECTOR, "._description_76ws3_47"))
        )
        return element.is_displayed()

    except TimeoutException:
        return False

