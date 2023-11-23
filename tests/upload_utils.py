import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec



def press_analyze_button(web_driver_utils):
    web_driver_utils \
        .click(xpath="/html/body/div[@id='root']/div[@class='page-box']/main[@class='padding-sides fix-height']/div[@class='_upload-box_1s2yo_1']/button[@class='_search_1s2yo_89 _btn_1s2yo_15']")

def bar_loading(driver=None):
    element = WebDriverWait(driver, 2).until(
        ec.element_to_be_clickable((By.XPATH, "/html/body/div[@id='root']/div[@class='page-box']/main[@class='padding-sides fix-height']/div[@class='progress']"))
    )
    return element.is_displayed()

def result_displayed(driver=None):
    element = WebDriverWait(driver, 5).until(
        ec.element_to_be_clickable((By.XPATH, "/html/body/div[@id='root']/div[@class='page-box']/main[@class='padding-sides fix-height']/section[@class='_result_1r17a_1']"))
    )
    return element.is_displayed() and "Title" in element.text and "Summary text" in element.text and "Date" in element.text and "Summary state:" in element.text

