package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	WebDriver driver;
	@Given("^open Chorme and start application$")
	public void open_Chorme_and_start_application(){
		 System.setProperty("webdriver.chrome.driver","/Users/fatemaislam/Downloads/chromedriver");
		 driver = new ChromeDriver();
		 driver.get("https://www.facebook.com");
	}

	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void i_enter_valid_and_valid(String username, String password)  {
	  driver.findElement(By.id("email")).sendKeys(username);
	  driver.findElement(By.id("pass")).sendKeys(password);
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() {
		driver.findElement(By.id("loginbutton")).click();
	}

	@Then("^application should be closed$")
	public void application_should_be_closed() {
	 driver.close();
	}


}
