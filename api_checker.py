import requests

# r = requests.get('http://localhost:3000/')
# print(r.json())


# u = requests.get('http://localhost:3000/api/1')
# print(u.json())


# CREATE
# person = {"name": "Matt Chinonso"}
# p = requests.post('http://localhost:3000/api/', data=person)
# print('p= ', p.json())


# READ
# person = {"name": "Udonne Chinonso"}
# id="65010d75b08fee9d5aeadf90"
# p = requests.get(f'http://localhost:3000/api/{id}')
# print('p= ', p.json())

# UPDATE
# person = {"name": "Travis bak]er"}
# id="6501124584c8ddf4c669afd4"
# p = requests.patch(f'http://localhost:3000/api/{id}', data=person)
# print('p= ', p.json(), p.status_code)



# DELETE
# id="65010d75b08fee9d5aeadf90"
# p = requests.delete(f'http://localhost:3000/api/{id}')
# print('p= ', p.json())


import requests
import json
import pytest

ENDPOINT = 'http://localhost:3000/api/'
user_id = '650076575d1b59da495bf65e'


# /GET Request
def test_get_endpoint():   
    response = requests.get(ENDPOINT+user_id)
    assert response.json().name=="Udonne Chinonso"
    assert response.status_code==200
    print(response)

# //POST Request
# def test_createUser_request():  
#     payload = {
#     "name": "morpheus01",
#     "job": "leader"
    
#     }
#     response = requests.post(ENDPOINT + "users",json=payload)
#     assert response.status_code==201
#     json_response =json.loads(response.text)
    
#     id = json_response["id"]
#     if "id" in json_response:
#         print(id)
#     else:
#         print("not found") 

#     if not (id is None):
#      print("value is present for given JSON key")
#      print(id)
#     else:
#      print("value is not present for given JSON key")

# def test_updateUser_request():  
#     # //PUT Request
#     payload = {
   
#     "name": "morpheus01",
#     "job": "buisnessman"

# }
#     response = requests.put(ENDPOINT + "users/2",json=payload)
#     assert response.status_code==200
#     json_response =json.loads(response.text)
   
#     job= json_response["job"]
#     print(job)
#     assert response.json()["job"] == "buisnessman"
#     assert job == "buisnessman"
#     assert json_response.get('job') == 'leader'
  
# def test_deleteUser_request():  
#     # //DELETE Request
 
#     response = requests.delete(ENDPOINT + "users/2")
#     assert response.status_code==204