from tkinter import *
#import tkinter.messagebox as msg


root=Tk()
root.geometry("380x380")
root.title("Nimish Tkinter Demo")
root.resizable(width=False,height=False)

l_id=Label(root,text="ID")
l_id.place(x=50,y=50)

l_fname=Label(root,text="FIRST NAME")
l_fname.place(x=50,y=100)

l_lname=Label(root,text="LAST NAME")
l_lname.place(x=50,y=150)

l_email=Label(root,text="EMAIL")
l_email.place(x=50,y=200)

l_mobile=Label(root,text="MOBILE")
l_mobile.place(x=50,y=250)

e_id=Entry(root)
e_id.place(x=150,y=50)

e_fname=Entry(root)
e_fname.place(x=150,y=100)

e_lname=Entry(root)
e_lname.place(x=150,y=150)

e_email=Entry(root)
e_email.place(x=150,y=200)

e_mobile=Entry(root)
e_mobile.place(x=150,y=250)

insert=Button(root,text="INSERT",bg="blue",fg="black",font=("Arial",12))
insert.place(x=20,y=300)

search=Button(root,text="SEARCH",bg="orange",fg="black",font=("Arial",12))
search.place(x=100,y=300)

update=Button(root,text="UPDATE",bg="green",fg="black",font=("Arial",12))
update.place(x=191,y=300)

delete=Button(root,text="DELETE",bg="yellow",fg="black",font=("Arial",12))
delete.place(x=279,y=300)
