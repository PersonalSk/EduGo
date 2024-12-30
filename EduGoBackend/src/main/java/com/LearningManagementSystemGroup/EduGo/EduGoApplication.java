package com.LearningManagementSystemGroup.EduGo;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EduGoApplication {

//	@Value("${spring.data.mongodb.uri}")
//	private String mongoUri;

	public static void main(String[] args) {
		System.out.println("EduGo start");
		Dotenv dotenv = Dotenv.load();
		System.out.println(dotenv);
		System.out.println("rami");
		System.setProperty("MONGO_URI", dotenv.get("MONGO_URI"));
		String uri = System.getProperty("MONGO_URI");
		System.out.println(uri);


		SpringApplication.run(EduGoApplication.class, args);


		System.out.println("EduGo Stop");
	}


}
