package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import net.javaguides.springboot.controller.EmployeeController;

@ComponentScan("springboot")
@ComponentScan(basePackageClasses=EmployeeController.class)
@SpringBootApplication(scanBasePackages= {"net.javaguides.springboot.controller"})
public class SpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

}