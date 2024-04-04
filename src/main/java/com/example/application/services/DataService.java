package com.example.application.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.application.Data;
import com.example.application.Person;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;

@BrowserCallable
@AnonymousAllowed
@Service
public class DataService {
	private String testNull;

	public Data getPeople() {

		Data data = new Data();
		data.setPeople(List.of(new Person("Sudebi", "Mukherjee" + testNull), new Person("Krishna", "Mukherjee")));
		return data;
	}

	public void setTestNull(String testNull) {
		this.testNull = testNull;
	}

}
