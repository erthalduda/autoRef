package autoref.tcc.autoref;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import autoref.tcc.autoref.model.Monografia;

@SpringBootApplication
public class AutorefApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutorefApplication.class, args);

		Monografia m1 = new Monografia();
		List<String> autores = new ArrayList<>();
		autores.add("João Silva");
		autores.add("Maria Silva");
		autores.add("Carlinhos Silva");
		m1.setAutor(autores);
		
		System.out.println(m1.toString());
	}

}