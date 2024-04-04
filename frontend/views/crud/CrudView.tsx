import React, { useState, useEffect } from 'react';
import { Crud } from '@hilla/react-components/Crud.js';
import { DataService } from 'Frontend/generated/endpoints.js';
import type Person from 'Frontend/generated/com/example/application/Person';

export default function CrudView() {
  const [items, setItems] = useState<Person[]>([]);
  const [editedItem, setEditedItem] = useState<Person | undefined>();
  useEffect(() => {
    DataService.getPeople().then(({ people }) => setItems(people));
  }, []);
  
  useEffect(() => {
   console.log(Date.now());
   console.log(editedItem);
  }, [editedItem]);
  
  function handleSave(event: any) {
    setEditedItem(event.detail.item); 
  }

  return (
    <Crud include="name, email" items={items} onSave={handleSave}/>
  );
}