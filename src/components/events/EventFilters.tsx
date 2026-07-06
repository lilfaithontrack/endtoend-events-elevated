import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export interface FilterOptions {
  searchQuery: string;
  category: string;
  genre: string;
  priceRange: [number, number];
  dateRange: string;
  location: string;
  status: string;
  sortBy: string;
}

interface EventFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  categories: string[];
  genres: string[];
  locations: string[];
}

export const EventFilters = ({ filters, onFilterChange, categories, genres, locations }: EventFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFilterChange({
      searchQuery: "",
      category: "all",
      genre: "all",
      priceRange: [0, 500],
      dateRange: "all",
      location: "all",
      status: "all",
      sortBy: "date",
    });
  };

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => {
    if (key === "searchQuery") return value !== "";
    if (key === "priceRange") return value[0] !== 0 || value[1] !== 500;
    return value !== "all" && value !== "date";
  }).length;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
        <Input
          type="text"
          placeholder="Search events by name, artist, or venue..."
          value={filters.searchQuery}
          onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent"
        />
      </div>

      {/* Quick Filters & Advanced Toggle */}
      <div className="flex flex-wrap items-center gap-3">
        <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
          <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date (Earliest)</SelectItem>
            <SelectItem value="date-desc">Date (Latest)</SelectItem>
            <SelectItem value="popularity">Most Popular</SelectItem>
            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
          <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
          <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="On Sale">On Sale</SelectItem>
            <SelectItem value="Selling Fast">Selling Fast</SelectItem>
            <SelectItem value="Coming Soon">Coming Soon</SelectItem>
          </SelectContent>
        </Select>

        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex-1">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Advanced Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 bg-accent text-white">{activeFiltersCount}</Badge>
              )}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Genre Filter */}
                  <div className="space-y-2">
                    <Label className="text-white">Genre</Label>
                    <Select value={filters.genre} onValueChange={(value) => handleFilterChange("genre", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white">
                        <SelectValue placeholder="All Genres" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Genres</SelectItem>
                        {genres.map((genre) => (
                          <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location Filter */}
                  <div className="space-y-2">
                    <Label className="text-white">Location</Label>
                    <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white">
                        <SelectValue placeholder="All Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Range Filter */}
                  <div className="space-y-2">
                    <Label className="text-white">Date Range</Label>
                    <Select value={filters.dateRange} onValueChange={(value) => handleFilterChange("dateRange", value)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white">
                        <SelectValue placeholder="All Dates" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Dates</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="this-week">This Week</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                        <SelectItem value="next-month">Next Month</SelectItem>
                        <SelectItem value="this-year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Price Range Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-white">Price Range</Label>
                    <span className="text-white/70 text-sm">
                      ${filters.priceRange[0]} - ${filters.priceRange[1]}
                    </span>
                  </div>
                  <Slider
                    min={0}
                    max={500}
                    step={10}
                    value={filters.priceRange}
                    onValueChange={(value) => handleFilterChange("priceRange", value as [number, number])}
                    className="w-full"
                  />
                </div>

                {/* Clear Filters Button */}
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-white/60 text-sm">Active filters:</span>
          {filters.searchQuery && (
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              Search: {filters.searchQuery}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => handleFilterChange("searchQuery", "")}
              />
            </Badge>
          )}
          {filters.category !== "all" && (
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              Category: {filters.category}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => handleFilterChange("category", "all")}
              />
            </Badge>
          )}
          {filters.genre !== "all" && (
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              Genre: {filters.genre}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => handleFilterChange("genre", "all")}
              />
            </Badge>
          )}
          {filters.location !== "all" && (
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              Location: {filters.location}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => handleFilterChange("location", "all")}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
