import time
from playwright.sync_api import sync_playwright, Page, expect
import os

def verify_homepage(page: Page):
    """
    Navigates to the homepage, waits for key content to load,
    and captures screenshots for desktop and mobile viewports.
    """
    # Create the directory if it doesn't exist, relative to the script's execution path
    output_dir = '../jules-scratch/verification'
    os.makedirs(output_dir, exist_ok=True)

    desktop_path = os.path.join(output_dir, 'homepage_desktop.png')
    mobile_path = os.path.join(output_dir, 'homepage_mobile.png')

    # Navigate to the homepage
    page.goto("http://localhost:3000")

    # --- Desktop Verification ---
    page.set_viewport_size({"width": 1280, "height": 800})

    # Wait for the main heading to be visible
    hero_heading = page.get_by_role("heading", name="Ihre Experten für betriebliche Vorsorge")
    expect(hero_heading).to_be_visible(timeout=10000) # 10 second timeout

    # Give animations and images a moment to settle
    time.sleep(2)

    page.screenshot(path=desktop_path, full_page=True)
    print("Desktop screenshot captured.")

    # --- Mobile Verification ---
    page.set_viewport_size({"width": 375, "height": 667})
    page.reload()

    # Wait for the main heading to be visible again on mobile
    hero_heading_mobile = page.get_by_role("heading", name="Ihre Experten für betriebliche Vorsorge")
    expect(hero_heading_mobile).to_be_visible(timeout=10000)

    # Give animations and images a moment to settle
    time.sleep(2)

    page.screenshot(path=mobile_path, full_page=True)
    print("Mobile screenshot captured.")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_homepage(page)
        except Exception as e:
            print(f"An error occurred: {e}")
            # Attempt to take a screenshot even on error for debugging
            output_dir = '../jules-scratch/verification'
            os.makedirs(output_dir, exist_ok=True)
            error_path = os.path.join(output_dir, 'error_screenshot.png')
            page.screenshot(path=error_path)
            print(f"Error screenshot saved to {error_path}")
        finally:
            browser.close()

if __name__ == "__main__":
    main()
