class Point:

    def __init__(self,x,y):
        print("init called")
        self.x=x
        self.y=y
        print("X : ",self.x," Y : ",self.y)

    def __str__(self):
        return "{0},{1}".format(self.x,self.y)

p1=Point(10,20)
print(p1)