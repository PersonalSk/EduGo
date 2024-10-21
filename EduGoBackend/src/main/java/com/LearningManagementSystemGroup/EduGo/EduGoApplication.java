package com.LearningManagementSystemGroup.EduGo;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EduGoApplication {

	public static void main(String[] args) {
		System.out.println("EduGo start");
		Dotenv dotenv = Dotenv.load();
		System.out.println(dotenv);
		System.out.println("rami");
		System.setProperty("MONGO_URI", dotenv.get("MONGO_URI"));
		SpringApplication.run(EduGoApplication.class, args);
		System.out.println("EduGo Stop");
	}

}
