**--> `npm i jsondata-io` <--**

# WHAT IS THIS

JsonData-IO provides IO functionalities, that allows you to read data, and write data to **.json** files.

# HOW IT WORKS

JsonData-IO gives you two functions that reads the data:

![readData](https://user-images.githubusercontent.com/75639924/202826237-0555b0cd-87fb-4bf0-8b85-3d01b07e300c.png)

And writes the data:

![writeData](https://user-images.githubusercontent.com/75639924/202826252-5f59648e-3a56-4449-a68e-647b446e0854.png)

Both of those functions contains an **options** parameter that implements, the **Options** interface.
Options interface looks like this:

![interface](https://user-images.githubusercontent.com/75639924/202826263-3b864077-3d45-404e-bbe7-ddc98a0daba6.png)

# HOW TO USE IT

Let's say we want to store data about **users**

Firstly, create **"users.json"** file and give some dummy data (or leave it with an empty array):

![file_structure](https://user-images.githubusercontent.com/75639924/202826281-362ff2bd-1e0c-4bd3-ae52-fc3941aecf8a.png)
![json](https://user-images.githubusercontent.com/75639924/202826289-c72c17c0-8bb8-4dd6-91c6-4443f0fed374.png)

Secondly, create an **IUser** interface and specify the type for every field:

![interface_User](https://user-images.githubusercontent.com/75639924/202826312-1854f396-561f-43e9-8fbd-641ef773a222.png)

Thirdly, **read data** or **write data** to the file.

**Reading data:**

![readData_full](https://user-images.githubusercontent.com/75639924/202901285-a8c19cc3-c7b8-4cac-86f4-dbf68c5586a7.png)

**Writing data:**

**`Array`**

![writeData_full](https://user-images.githubusercontent.com/75639924/202826517-af259bde-0898-41f7-9e4c-e31046db336a.png)

**`Object`**

![writeData_full_obj](https://user-images.githubusercontent.com/75639924/202826537-85865450-944d-4e54-8ede-1fd1c791acc3.png)

**`type: single`**

![writeData_full_single](https://user-images.githubusercontent.com/75639924/203144158-a34afd62-6016-4905-8db3-c2f904cdca4d.png)

**`type: array`**

![writeData_full_array](https://user-images.githubusercontent.com/75639924/203144486-c7aa1e4d-1d51-4bf9-8f10-41a7192dad85.png)

# THE END

That's it.
