package autoref.tcc.autoref;

// import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// import autoref.tcc.autoref.model.*;

@SpringBootApplication
@EnableWebMvc
public class AutorefApplication implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
	}

	public static void main(String[] args) {
		SpringApplication.run(AutorefApplication.class, args);

		// ParteMonografia m1 = new ParteMonografia();
		// ArrayList<String> l1 = new ArrayList<>();
		// l1.add("Mariazinha Gomes Ferreira");
		// l1.add("Carlinha Fonseca");
		// l1.add("Joãozinho da Silva");
		// // l1.add("Carlota Joaquina");
		// m1.setAutor(l1);
		// m1.setAutorParte("Joãozinho da Silva Costa");
		// m1.setAnoEntrega("2022");
		// m1.setAnoPublicacao("2022");
		// m1.setTitulo("Avaliação da microbiota bucal em pacientes sob uso crônico de
		// penicilina e benzatina");
		// m1.setSubtitulo("Subtitulo foda");
		// m1.setTituloParte("Parte Legal");
		// m1.setCidade("Sococó da Ema");
		// m1.setEdicao("1");
		// m1.setEditora("Editora Legal");
		// m1.setSecao("Seçao legal");
		// m1.setVolume(3);
		// m1.setQuantidadePaginas("323");
		// m1.setTipo("parteMonografia");
		// m1.formata();
		// m1.formataCitacoes();
		// System.out.println(m1.getCitacaoDireta());
		// System.out.println(m1.getCitacaoIndireta());
		// System.out.println(m1.getFormatoFinal());

	}

}