package com.eecs395.fint;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class FintApplication {

	public static void main(String[] args) {
		SpringApplication.run(FintApplication.class, args);
	}

	@Bean
	public StorageProperties storageProperties() {
		return new StorageProperties ();
	}

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			storageService.deleteAll();
			storageService.init();
		};
	}

}
